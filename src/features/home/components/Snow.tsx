import Particles from 'react-tsparticles';

export const Snow = (): JSX.Element => {
  return (
    <Particles
      options={{
        interactivity: {
          modes: {
            bubble: {
              distance: 200,
              duration: 0.4,
              opacity: 1,
              size: 30,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 180,
              links: {
                opacity: 0.35,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 10,
            },
            repulse: {
              distance: 100,
              duration: 5,
            },
            slow: {
              factor: 1,
              radius: 0,
            },
          },
        },
        particles: {
          color: {
            value: '#FFF',
          },
          links: {
            blink: false,
            color: {
              value: '#FFFFFF',
            },
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.6,
            shadow: {
              blur: 5,
              color: {
                value: 'lime',
              },
              enable: false,
            },
            width: 1,
          },
          move: {
            direction: 'bottom',
            enable: true,
            speed: 1.2,
          },
          number: {
            limit: -1,
            value: 30,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
            value: {
              min: 0.1,
              max: 0.5,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {
              min: 1,
              max: 10,
            },
          },
        },
        pauseOnBlur: true,
        background: {
          image: '',
          size: 'cover',
        },
      }}
    />
  );
};
