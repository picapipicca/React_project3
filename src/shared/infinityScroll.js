import React from "react";
import _ from "lodash";
import { Spinner } from "../elements";

const InfinityScroll = (props) => {
  const { children, is_next, callNext, loading } = props;

  const _handleScroll = _.throttle(() => {
    if (loading) {
      return;
    }

    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 200) {
      callNext();
    }
  }, 300);

  const handleScroll = React.useCallback(_handleScroll, [loading]);

  React.useEffect(() => {
    if (loading) {
      return;
    }

    if (is_next) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
    window.addEventListener("scroll", () => {});

    return () => window.removeEventListener("scroll", () => {});
  }, [is_next, loading]);

  return (
    <React.Fragment>
        {props.children}
        {is_next && <Spinner/>}
    </React.Fragment>
  );
};

InfinityScroll.defafaultProps = {
  children: null,
  is_next: false,
  callNext: () => {},
  loading: false,
};

export default InfinityScroll;
