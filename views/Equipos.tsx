import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
  ButtonGroup,
  ButtonText,
  CloseIcon,
  Heading,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import * as React from 'react';

import {Appbar, DataTable} from 'react-native-paper';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
function Equipos() {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[2],
  );

  const [items] = React.useState([
    {
      key: 1,
      name: 'Real Madrid',
      calories: 22,
      fat: 16,
    },
    {
      key: 2,
      name: 'Neymaynor',
      calories: 14,
      fat: 16,
    },
    {
      key: 3,
      name: 'Cuervos',
      calories: 15,
      fat: 6,
    },
    {
      key: 4,
      name: 'Los mismos',
      calories: 21,
      fat: 3.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  const _handleSearch = () => console.log('Searching');
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
      <Appbar.Header elevated={true} style={{backgroundColor: '#CA14F7'}}>
        <Appbar.Content title="Tus equipos" color="#F4F4F4" />
        <Appbar.Action icon="plus" onPress={_handleSearch} color="#F4F4F4" />
      </Appbar.Header>

      <VStack padding={'$4'} mt={'$2'}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nombre</DataTable.Title>
            <DataTable.Title numeric>Jugadores</DataTable.Title>
            <DataTable.Title numeric>Salir</DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map(item => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
              <DataTable.Cell numeric>
                {' '}
                <Icon6
                  name="person-walking-dashed-line-arrow-right"
                  size={20}
                  color="#CA14F7"
                  onPress={() => setShowAlertDialog(true)}
                />
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / itemsPerPage)}
            onPageChange={page => setPage(page)}
            label={`${from + 1}-${to} de ${items.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={'Jugadores por página'}
          />
        </DataTable>
      </VStack>

      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">Salir del equipo</Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              Si te sales del equipo no recibirás puntuación por los resultados
              del equipo y no podrás volver a unirte hasta que el manager te
              extienda otra invitación.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup space="lg">
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setShowAlertDialog(false);
                }}>
                <ButtonText>Cancelar</ButtonText>
              </Button>
              <Button
                bg="$error600"
                action="negative"
                onPress={() => {
                  setShowAlertDialog(false);
                }}>
                <ButtonText>Si quiero salirme</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default Equipos;
