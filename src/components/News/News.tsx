import React, { useEffect } from "react";
import newsBackground from "assets/news.jpg";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import YouTube from "react-youtube";

const News = (props: any) => {
  useEffect(() => {
    // Clean up the audio when the component is unmounted
    return () => {
      // Cleanup code
    };
  }, []);

  if (!props.isAuth) return <Redirect to={"/login"} />;

  const opts = {
    width: "800",
    height: "450",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
      <div>
        <YouTube videoId="0bBB4UBHgKE" opts={opts} />
      </div>
  );
};

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(News);
