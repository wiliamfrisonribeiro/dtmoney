
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';


Modal.setAppElement('#root')
export function App() {


  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false)

  function handleOpenNewTranslationModal() {

    setIsNewTranslationModalOpen(true);

  }

  function handleCloseNewTranslationModal() {

    setIsNewTranslationModalOpen(false);


  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTranslationModal={handleOpenNewTranslationModal} />
      <Dashboard></Dashboard>
      <NewTransactionModal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}

      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}


