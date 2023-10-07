import {
  Box,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Link,
} from '@gluestack-ui/themed';
import * as React from 'react';
import {SafeAreaView} from 'react-native';

function Noticias() {
  return (
    <SafeAreaView>
      <VStack>
        <HStack></HStack>
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
              h={150}
              w={350}
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
      </VStack>
    </SafeAreaView>
  );
}

export default Noticias;
