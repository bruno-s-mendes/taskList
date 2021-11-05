import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('testa se adiciona uma tarefa corretamente', () => {
  afterEach(() => jest.clearAllMocks());
  it('Adiciona tarefa', async () => {
    jest.spyOn(global, 'fetch');

    render(<App />);
    const description = screen.getByPlaceholderText('Descrição');
    const data = screen.getByPlaceholderText('Prazo');
    const addButton = screen.getByText('Adicionar Tarefa');

    userEvent.type(description, 'Fazer projeto');
    userEvent.type(data, '05-10-2021');
    userEvent.click(addButton);

    const timesCalled = 4;
    expect(global.fetch).toBeCalledTimes(timesCalled);
  });
});

describe('testa se renderiza os itens recebidos', () => {
  afterEach(() => jest.clearAllMocks());
  it('renderizacao das atrefas mockadas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
            "_id": "61849a2aca7c1479f7b99381",
            "description": "Apresentar desafio técnico",
            "creationDate": "04/11/2021",
            "deadLine": "2021-11-06",
            "status": "Pendendte"
        },
        {
            "_id": "61849a3bca7c1479f7b99382",
            "description": "Terminar desafio Técnico",
            "creationDate": "04/11/2021",
            "deadLine": "2021-11-04",
            "status": "Pronto"
        },
        {
            "_id": "61855894eff32ee0e256d842",
            "description": "Almocar",
            "creationDate": "05/11/2021",
            "deadLine": "2021-11-05",
            "status": "Em andamento"
        }
    ]),
    });
    render(<App />);

    const task1 = await screen.findByDisplayValue('Apresentar desafio técnico');
    const task2 = await screen.findByDisplayValue('Terminar desafio Técnico');
    const task3 = await screen.findByDisplayValue('Almocar');

    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
    expect(task3).toBeInTheDocument();
    const timesCalled = 2;
    expect(global.fetch).toBeCalledTimes(timesCalled);
  });
});
