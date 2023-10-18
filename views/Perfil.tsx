import * as React from 'react';
import {View} from 'react-native';
import {Avatar, Card, Title, Paragraph, Appbar} from 'react-native-paper';
function Perfil() {
  const _handleSearch = () => console.log('Searching');

  return (
    <>
      <Appbar.Header elevated={true} style={{backgroundColor: '#CA14F7'}}>
        <Appbar.Content title="Tu perfil" color="#F4F4F4" />
        <Appbar.Action icon="pencil" onPress={_handleSearch} color="#F4F4F4" />
      </Appbar.Header>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Avatar.Image size={100} source={require('../assets/salah.png')} />

        <Card style={{width: '90%', marginTop: 20}}>
          <Card.Content>
            <Title style={{fontWeight: 'bold'}}>Nombre</Title>
            <Paragraph>Mohammed Salah</Paragraph>

            <Title style={{fontWeight: 'bold'}}>Email</Title>
            <Paragraph>alahelpsme@liverpoolfc.com</Paragraph>

            <Title style={{fontWeight: 'bold'}}>Pierna dominante</Title>
            <Paragraph>Izquierda</Paragraph>
            <Title style={{fontWeight: 'bold'}}>Edad</Title>
            <Paragraph>31 Años</Paragraph>
            <Title style={{fontWeight: 'bold'}}>Posiciones</Title>
            <Paragraph>Delantero centro, Extremo derecho</Paragraph>
            <Title style={{fontWeight: 'bold'}}>Ciudad</Title>
            <Paragraph>Liverpool, Inglaterra</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}

export default Perfil;
