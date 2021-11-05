import { render, screen } from '@testing-library/react';
import App from './App';

describe('Renderiza um apagina com os elementos estaticos', () => {
  test('Renderiza o titulo', () => {
    render(<App />);
    const title = screen.getByText('Lista de Tarefas')
    expect(title).toBeInTheDocument();
  });

  test('renderiza o formulario para adicionar tarefa', () => {
    render(<App />);
    const description = screen.getByPlaceholderText('Descrição');
    const data = screen.getByPlaceholderText('Prazo');
    const addButton = screen.getByText('Adicionar Tarefa');

    expect(description).toBeInTheDocument();
    expect(data).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('Renderiza a tabela de tarefas', () => {
    render(<App />);
    const descricao = screen.getByText('Descrição');
    const criacao = screen.getByText('Criação');
    const prazo = screen.getByText('Prazo');
    const status = screen.getByText('Status');

    expect(descricao).toBeInTheDocument();
    expect(criacao).toBeInTheDocument();
    expect(prazo).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });
});