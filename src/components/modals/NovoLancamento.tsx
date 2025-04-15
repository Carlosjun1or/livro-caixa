// components/modals/NovoLancamento.tsx

import "./NovoLancamento.css";

interface NovoLancamentoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NovoLancamento: React.FC<NovoLancamentoProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Novo Lançamento</h2>
        <form>
          <div className="form-group">
            <label>Descrição</label>
            <input type="text" placeholder="Descrição" />
          </div>
          <div className="form-group">
            <label>Data</label>
            <input type="date" /> <br />
            <label>Hora</label>
            <input type="time" />
          </div>
          <div className="form-group">
            <label>Valor</label>
            <input type="number" placeholder="R$" />
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" /> Pago
            </label>
            <label>
              <input type="checkbox" /> Recebido
            </label>
          </div>
          <div className="form-buttons">
            <button>Salvar</button>
            
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NovoLancamento;