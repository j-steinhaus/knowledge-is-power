import React, { useEffect, useContext, useState, useRef, useMemo } from "react";
import { Container } from "semantic-ui-react";
import Nav from "../sections/Nav";
import ButtonVideo from "../sections/ButtonVideo";
import FormVideo from "../sections/FormVideo";
import Movies from "../utils/Movies";

// page after login 
function Main() {
  const { user, addVideo, removeTopic } = useContext(UserContext);
  const userCategoriesofVideos = useMemo(() => {
    return (user?.movies ?? []).map((item) => item.category);
  }, [user]);
  const [JS, SetJS] = useState(() => {
    return userCategoriesofVideos.includes("JS");
  });
  const [CSS, SetCSS] = useState(() => {
    return userCategoriesofVideos.includes("CSS");
  });
  const [REACT, SetREACT] = useState(() => {
    return userCategoriesofVideos.includes("REACT");
  });
  const [HTML, SetHTML] = useState(() => {
    return userCategoriesofVideos.includes("HTML");
  });
  const JSswitchEl = useRef();
  const CSSswitchEl = useRef();
  const REACTswitchEl = useRef();
  const HTMLswitchEl = useRef();
  const past = useHistory();

  useEffect(() => {
    if (!user) {
      past.replace("/");
    }
  }, [user, past]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Nav />
      <Container>
        <ButtonVideo
          jsSetter={(value) => {
            SetJS(value);
            if (!userCategoriesofVideos.includes("Java")) {
              addVideo(Movies.JsVideoArray);
            } else {
              removeTopic("Java");
            }
          }}
          jsState={JS}
          jsRef={JSswitchEl}
          CSSSetter={(value) => {
            SetCSS(value);
            if (!userCategoriesofVideos.includes("CSS")) {
              addVideo(Videos.cssVideoArray);
            } else {
              removeTopic("CSS");
            }
          }}
          CSSState={CSS}
          CSSRef={CSSswitchEl}
          REACTSetter={(value) => {
            SetREACT(value);
            if (!userCategoriesofVideos.includes("REACT")) {
              addVideo(Videos.ReactVideoArray);
            } else {
              removeTopic("REACT");
            }
          }}
          REACTState={REACT}
          REACTRef={REACTswitchEl}
          HTMLSetter={(value) => {
            SetHTML(value);
            if (!userCategoriesofVideos.includes("HTML")) {
              addVideo(Movies.htmlVideoArray);
            } else {
              removeTopic("HTML");
            }
          }}
          HTMLState={HTML}
          HTMLRef={HTMLswitchEl}
        />
        <FormVideo />
      </Container>
    </>
  );
}
export default Main;