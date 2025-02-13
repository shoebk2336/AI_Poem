import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './Cards.module.css';


export function FeaturesCards({Poems}) {
        console.log(Poems,'in cards')
  const theme = useMantineTheme();

  const features = Poems.map((poem,index) => (
    <Card key={index} shadow="md" radius="md" className={classes.card} padding="xl">
      {/* <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} /> */}
      {/* <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {}
      </Text> */}
      <Text fz="sm" c="black" mt="sm" style={{whiteSpace:"pre-wrap"}}>
        {poem}
      </Text>
    </Card>


  ));

  return (
    <Container size="70%" py="xl" style={{border:"0px solid red"}}>
      <Group justify="center">
        <Badge variant="filled" size="lg">
        Rhythmic Whispers 🎶
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
      🌸 Whispered Verses: A Collection of Poetic Dreams 🌙
      </Title>

      {/* <Text c="dimmed" className={classes.description} ta="center" mt="md">
      Every poem is a window into a soul, a melody woven in words. 
      Explore heartfelt verses, dreamy rhymes, and whispers of imagination—all crafted with l
      ove. Let poetry take you on a journey where emotions dance and words embrace the heart.
      </Text> */}
      <Text c='dimmed' w={"70%"} ta={'center'} style={{margin:"auto",textAlign:"justify"}}>
      Every poem is a window into a soul, a melody woven in words. 
      Explore heartfelt verses, dreamy rhymes, and whispers of imagination—all crafted with l
      ove. Let poetry take you on a journey where emotions dance and words embrace the heart.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
        {Poems.length==0?
        <Title order={2} className={classes.title} ta="center" mt="sm">
        Your poetic journey has just begun! ✨ 
        Start writing your first poem and let your words create magic.
        </Title>
        
        :
        features}
      </SimpleGrid>
    </Container>
  );
}