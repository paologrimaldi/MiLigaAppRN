import {
  Box,
  Heading,
  Image,
  VStack,
  HStack,
  Pressable,
  ButtonText,
  Text,
  Link,
  ScrollView,
} from '@gluestack-ui/themed';
import * as React from 'react';

import {Appbar} from 'react-native-paper';
function Noticias() {
  return (
    <>
      <Appbar.Header elevated={true} style={{backgroundColor: '#CA14F7'}}>
        <Appbar.Content title="MiLiga App" color="#F4F4F4" />
      </Appbar.Header>
      <VStack mt={'$3'}>
        <ScrollView horizontal={true} h={150}>
          <HStack>
            <Box
              bg="#0891b2"
              py="$4"
              px="$3"
              mx="$3"
              rounded="$md"
              height={132}
              width={375}
              maxWidth="100%">
              <HStack justifyContent="space-between" height="100%">
                <Box justifyContent="space-between">
                  <VStack space="xs">
                    <Text fontSize="$sm" color="$white">
                      Inicia 22 Oct 2023
                    </Text>
                    <Text color="$white" fontSize="$xl">
                      Torneo Futeca MiLiga 1000
                    </Text>
                  </VStack>
                  <Pressable
                    rounded="$xs"
                    bg="#22d3ee"
                    alignSelf="flex-start"
                    py="$1"
                    px="$3">
                    <ButtonText
                      textTransform="uppercase"
                      fontSize="$sm"
                      fontWeight="$bold"
                      color="$white">
                      Más información
                    </ButtonText>
                  </Pressable>
                </Box>
                <Image
                  source={{
                    uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
                  }}
                  alt="Aang flying and surrounded by clouds"
                  height={100}
                  rounded="$full"
                  width={100}
                />
              </HStack>
            </Box>

            <Box
              bg="#0891b2"
              py="$4"
              px="$3"
              rounded="$md"
              height={132}
              width={375}
              maxWidth="100%">
              <HStack justifyContent="space-between" height="100%">
                <Box justifyContent="space-between">
                  <VStack space="xs">
                    <Text fontSize="$sm" color="$white">
                      Inicia 22 Oct 2023
                    </Text>
                    <Text color="$white" fontSize="$xl">
                      Torneo Futeca MiLiga 1000
                    </Text>
                  </VStack>
                  <Pressable
                    rounded="$xs"
                    bg="#22d3ee"
                    alignSelf="flex-start"
                    py="$1"
                    px="$3">
                    <ButtonText
                      textTransform="uppercase"
                      fontSize="$sm"
                      fontWeight="$bold"
                      color="$white">
                      Más información
                    </ButtonText>
                  </Pressable>
                </Box>
                <Image
                  source={{
                    uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
                  }}
                  alt="Aang flying and surrounded by clouds"
                  height={100}
                  rounded="$full"
                  width={100}
                />
              </HStack>
            </Box>
          </HStack>
        </ScrollView>

        <ScrollView padding={10} h={550}>
          <Box
            borderColor="$borderLight200"
            borderRadius="$lg"
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{
              '@base': {
                mx: '$5',
              },
              '@lg': {
                my: '0',
              },
              _dark: {
                bg: '$backgroundDark900',
                borderColor: '$borderDark800',
              },
            }}>
            <Box>
              <Image
                h={180}
                w="100%"
                alt="cejusa"
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1685055940272-62cce291d7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=200',
                }}
              />
            </Box>
            <VStack px="$6" pt="$2" pb="$6">
              <Text fontSize="$sm" my="$1.5">
                Agosto 16, 2023
              </Text>
              <Heading size="sm">Entreno en el Cejusa</Heading>
              <Text my="$1.5" fontSize="$xs">
                Los jugadores salieron a la cancha a dejar el alma y se pudo ver
                como Roberto Orellana les gritaba caminen cerdos.
              </Text>
              <Text my="$1.5" fontSize="$xs">
                La liga aun no agarra nivel pero hay esperanza al ver un manager
                tan enojado.
              </Text>
              <Link href="https://gluestack.io/" isExternal>
                <Text fontSize="$sm" color="$pink600">
                  Ver más de esta noticia...
                </Text>
              </Link>
            </VStack>
          </Box>
          <Box
            borderColor="$borderLight200"
            borderRadius="$lg"
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{
              '@base': {
                mx: '$5',
              },
              '@lg': {
                my: '0',
              },
              _dark: {
                bg: '$backgroundDark900',
                borderColor: '$borderDark800',
              },
            }}>
            <Box>
              <Image
                h={180}
                w="100%"
                alt="cejusa"
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1685055940272-62cce291d7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=350&q=200',
                }}
              />
            </Box>
            <VStack px="$6" pt="$2" pb="$6">
              <Text fontSize="$sm" my="$1.5">
                Agosto 16, 2023
              </Text>
              <Heading size="sm">Entreno en el Cejusa</Heading>
              <Text my="$1.5" fontSize="$xs">
                Los jugadores salieron a la cancha a dejar el alma y se pudo ver
                como Roberto Orellana les gritaba caminen cerdos.
              </Text>
              <Text my="$1.5" fontSize="$xs">
                La liga aun no agarra nivel pero hay esperanza al ver un manager
                tan enojado.
              </Text>
              <Link href="https://gluestack.io/" isExternal>
                <Text fontSize="$sm" color="$pink600">
                  Ver más de esta noticia...
                </Text>
              </Link>
            </VStack>
          </Box>
        </ScrollView>
      </VStack>
    </>
  );
}

export default Noticias;
