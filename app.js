gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const timelineLineOne = gsap.timeline({
    duration: 1,
  });

  timelineLineOne
    .from(".section1 h1 span:nth-child(1)", {
      x: "-30vw",
    })
    .from(".section1 h1 span:nth-child(2)", {
      x: "100vw",
    })
    .from(".section1 p", {
      opacity: 0,
      transformOrigin: "top left",
      transform: "rotate(90deg)",
    })
    .from(".section1 img", {
      y: "100vh",
    });

  const timelineLineTwo = gsap.timeline({
    duration: 1,
    scrollTrigger: {
      trigger: ".section2",
      start: "top center",
      toggleActions: "play reset play reset",
    },
  });

  timelineLineTwo
    .from(".section2 h2 span", {
      opacity: 0,
      y: "-100vh",
      stagger: 0.5,
    })
    .from(".section2 p", {
      opacity: 0,
      scaleX: 0,
    });

  gsap.set(".section3 p span", {
    y: "50vh",
  });

  gsap.set(".section4 .portfolio-item", {
    x: "100vw",
  });

  const timelineLineThree = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-sections",
      start: "center center",
      scrub: true,
      pin: true,
    },
  });

  timelineLineThree
    .from(".section3 h2", {
      scale: 10,
      x: "-50vw",
      y: "-50vh",
    })
    .to(".section3 p span", {
      y: 0,
      color: "black",
      background: "white",
      stagger: 0.5,
    })
    .to(".section3", {
      paddingRight: 0,
      paddingLeft: 0,
    })
    .to(
      ".horizontal-sections",
      {
        duration: 10,
        x: "-100vw",
      },
      "<"
    )
    .to(
      ".section4 .portfolio-item",
      {
        duration: 5,
        x: 0,
        stagger: 3,
      },
      "=-50%"
    );

  gsap.set(".section5 h2", {
    whiteSpace: "break-spaces",
  });

  let returnText = "";
  const contactContainer = document.querySelector(".section5 div h2");
  const splitContactText = contactContainer.innerText.split("");
  for (const char of splitContactText) {
    returnText += `<span>${char}</span>`;
  }
  contactContainer.innerHTML = returnText;

  const timelineLineFive = gsap.timeline({
    duration: 1,
    scrollTrigger: {
      trigger: ".section5",
      start: "center center",
      scrub: true,
      pin: true,
    },
  });

  timelineLineFive
    .from(".section5 div h2 span", {
      y: "-100vh",
      stagger: 1,
    })
    .from(".section5 p", {
      opacity: 0,
      y: "100px",
    })
    .from(".section5 button", {
      scale: 0,
    })
    .to(".section5", {
      backgroundColor: "black",
    })
    .from(
      ".section5",
      {
        backgroundPositionX: "200%",
      },
      "<"
    );
});
