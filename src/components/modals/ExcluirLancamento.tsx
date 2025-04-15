// components/modals/ExcluirLancamento.tsx


import "./ExcluirLancamento.css";

interface ExcluirLancamentoProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExcluirLancamento({
  isOpen,
  onClose,
}: ExcluirLancamentoProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header excluir">
          <h2>Excluir</h2>
        </div>
        <div className="modal-body">
          <p>Você tem certeza de excluir este registro?</p>
        </div>
        <div className="modal-footer">
          <button className="btn-sim" >
            Sim
          </button>
          <button className="btn-cancelar" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
export default ExcluirLancamento;
