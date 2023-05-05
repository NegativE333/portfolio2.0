import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    // height: rem(200),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}));

interface CardProps {
  image: string;
  title: string;
}

function Card({ image, title }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={`${classes.card} h-[200px]`}
    >
      <Button variant="white" color="dark" className='bg-zinc-800 text-white'>
        {title}
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      '/images/reactJS.jpg',
    title: 'React JS',
  },
  {
    image:
      '/images/nextJS.webp',
    title: 'Next JS',
  },
  {
    image:
      '/images/tcss.webp',
    title: 'Tailwind CSS',
  },
  {
    image:
      '/images/nodeJS.jpg',
    title: 'Node JS',
  },
  {
    image:
      '/images/mongoDB.jpg',
    title: 'Mongo DB',
  },
  {
    image:
      '/images/framerMotion.webp',
    title: 'Framer Motion',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="33%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '50%', slideGap: rem(1) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 3}
    >
      {slides}
    </Carousel>
  );
}
