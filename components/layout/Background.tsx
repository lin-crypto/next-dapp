import Particles, { EasingType } from "react-tsparticles"

export default function Background(): JSX.Element {
  return (
    <div className="background">
      <Particles
        id="tsparticles"
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "transparent",
            },
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "buble",
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 200,
                duration: 0.4,
                easing: EasingType.easeOutQuad,
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                mix: false,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance:	400,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: EasingType.easeOutQuad,
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
              },
            },
          },
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
          particles: {
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 100,
              },
              value: 5,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "image",
              options: {
                image: [
                  {
                    src: "/images/crypto-icons/1.png",
                    width: 180,
                    height: 180,
                  },
                  {
                    src: "/images/crypto-icons/2.png",
                    width: 180,
                    height: 180,
                  },
                  {
                    src: "/images/crypto-icons/3.png",
                    width: 180,
                    height: 180,
                  },
                  {
                    src: "/images/crypto-icons/4.png",
                    width: 180,
                    height: 180,
                  },
                  {
                    src: "/images/crypto-icons/5.png",
                    width: 180,
                    height: 180,
                  },
                  {
                    src: "/images/crypto-icons/6.png",
                    width: 180,
                    height: 180,
                  },
                  {
                    src: "/images/crypto-icons/7.png",
                    width: 180,
                    height: 180,
                  },
                  {
                    src: "/images/crypto-icons/8.png",
                    width: 180,
                    height: 180,
                  },
                  {
                    src: "/images/crypto-icons/9.png",
                    width: 180,
                    height: 180,
                  },
                  {
                    src: "/images/crypto-icons/10.png",
                    width: 180,
                    height: 180,
                  }
                ]
              }
            },
            size: {
              random: true,
              value: 30,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          zLayers: 100,
        }}
      />
    </div>
  );
}
