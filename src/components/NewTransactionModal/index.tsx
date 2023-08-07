
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from '../NewTransactionModal/styles';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import closeImg from '../../assets/botãoFechar.svg';
import { api } from '../../services/api';


interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionProps) {

    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    const [type, setType] = useState('deposit')

    function handleCreatesNewTransaction(event: FormEvent) {

        event.preventDefault();

        const data = {title, value, category, type}

        api.post('/transactions', data)

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >


            <Container onSubmit={handleCreatesNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input placeholder='Título' value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder='Valor' value={value} onChange={event => setValue(Number(event.target.value))} />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"

                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"

                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder='Categoria'
                    value={category} onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>

    )

}




