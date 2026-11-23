import { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const books = [
  {id: '1', title: 'Harry Potter', author: 'JK'},
  {id: '2', title: 'O Senhor dos Anéis', author: 'Tolkien'},
  {id: '3', title: 'Dom Casmurro', author: 'Machado de Assis'},
  {id: '4', title: '1984', author: 'George Orwell'},
  {id: '5', title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry'},
  {id: '6', title: 'A Revolução dos Bichos', author: 'George Orwell'},
  {id: '7', title: 'Cem Anos de Solidão', author: 'Gabriel García Márquez'},
  { id: '8', title: 'O Alquimista', author: 'Paulo Coelho'},
  { id: '9', title: 'Orgulho e Preconceito', author: 'Jane Austen'},
  { id: '10', title: 'O Hobbit', author: 'J.R.R. Tolkien'},
  { id: '11', title: 'A Hora da Estrela', author: 'Clarice Lispector'},
  { id: '12', title: 'Duna', author: 'Frank Herbert'},
  { id: '13', title: 'O Código Da Vinci', author: 'Dan Brown'},
  { id: '14', title: 'Vidas Secas', author: 'Graciliano Ramos'},
  { id: '15', title: 'It: A Coisa', author: 'Stephen King'}
];

export default function App() {
const [searchText, setSearchText] = useState('');
const filteredBooks = books.filter((book) =>
book.title.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <Container>
      <Title>LeituraVIva</Title>

      <Search
      placeholder="code"
      value={searchText}
      onChangeText={setSearchText}
      />

     <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Bookitem>
            <BookInfo>
              <BookTitle>{item.title}</BookTitle>
              <BookAuthor>{item.author}</BookAuthor>
            </BookInfo>
            <BottomBarButton>
              <TitleButton>Available</TitleButton>
            </BottomBarButton>
          </Bookitem>
        )}
      />
    </Container>
  );
}


const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 20px;
`;

const BookInfo = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;   

const Search  = styled.TextInput`
    background-color: #d6d1d1;
    border-radius: 10px;
    font-size: 14px;
    margin-bottom: 12px;
`;

const Bookitem = styled.View`
  flex-direction: row;
  padding: 15px;
  border-radius: 20px;
  border-width: 1px;
  border-color: #cccccc;
  margin-bottom: 14px;
`;

const BookTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const BookAuthor = styled.Text`
  font-size: 14px;
  color: #666666;
`;

const TitleButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const BottomBarButton = styled.Pressable`
  padding: 15px;
  border-radius: 20px;
  border-width: 1px;
`;