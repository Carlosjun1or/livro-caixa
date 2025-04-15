// pages/Registro.tsx

import { useState } from "react";
import "./Registro.css";
import { NovoLancamento } from "../components/modals/NovoLancamento";
import { EditarLancamento } from "../components/modals/EditarLancamento";
import { ExcluirLancamento }from "../components/modals/ExcluirLancamento";

export function Registro() {
  const dados = [
    {
      id: 1,
      descricao: "Compra de material de escritório",
      data: "08/12/2024",
      hora: "14:00",
      valor: 200.0,
      tipo: "Pago",
    },
    {
      id: 2,
      descricao: "Recebimento de cliente",
      data: "08/12/2024",
      hora: "12:23",
      valor: 1500.0,
      tipo: "Recebido",
    },
    {
      id: 3,
      descricao: "Pagamento de serviços",
      data: "07/05/2024",
      hora: "10:30",
      valor: 750.0,
      tipo: "Pago",
    },
    {
      id: 4,
      descricao: "Recebimento de cliente",
      data: "07/05/2024",
      hora: "09:45",
      valor: 650.0,
      tipo: "Recebido",
    },
    {
      id: 5,
      descricao: "Pagamento de impostos",
      data: "06/05/2024",
      hora: "15:27",
      valor: 1345.23,
      tipo: "Pago",
    },
    {
      id: 6,
      descricao: "Pagamento de emolumentos",
      data: "06/05/2024",
      hora: "12:30",
      valor: 850.0,
      tipo: "Pago",
    },
  ];

  const totalPago = dados
    .filter((d) => d.tipo === "Pago")
    .reduce((acc, curr) => acc + curr.valor, 0);
  const totalRecebido = dados
    .filter((d) => d.tipo === "Recebido")
    .reduce((acc, curr) => acc + curr.valor, 0);
  const saldo = totalRecebido - totalPago;

  const [modalLancamentoAberta, setModalLancamentoAberta] = useState(false);
  const [modalEditarAberta, setModalEditarAberta] = useState(false);
  const [modalExcluirAberta, setModalExcluirAberta] = useState(false);

  return (
    <div className="registro-container">
      <h2>Nova tabela</h2>
      <table className="tabela-lancamentos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Valor (R$)</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.descricao}</td>
              <td>{item.data}</td>
              <td>{item.hora}</td>
              <td>{item.valor.toFixed(2)}</td>
              <td>{item.tipo}</td>
              <td>
                <a href="#" onClick={() => setModalEditarAberta(true)}>
                  Editar
                </a>{" "}
                |{" "}
                <a href="#" onClick={() => setModalExcluirAberta(true)}>
                  Deletar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="resumo">
        <div>
          <label>Total de pagos</label>
          <input type="text" readOnly value={`R$ ${totalPago.toFixed(2)}`} />
        </div>
        <div>
          <label>Total de recebidos</label>
          <input
            type="text"
            readOnly
            value={`R$ ${totalRecebido.toFixed(2)}`}
          />
        </div>
        <div>
          <label>Saldo</label>
          <input type="text" readOnly value={`R$ ${saldo.toFixed(2)}`} />
        </div>
        <div>
          <button onClick={() => setModalLancamentoAberta(true)}>Novo lançamento</button>
        </div>
      </div>

      {/* Modais */}
      <NovoLancamento
        isOpen={modalLancamentoAberta}
        onClose={() => setModalLancamentoAberta(false)}
      />
      <EditarLancamento
        isOpen={modalEditarAberta}
        onClose={() => setModalEditarAberta(false)}
      />
      <ExcluirLancamento
        isOpen={modalExcluirAberta}
        onClose={() => setModalExcluirAberta(false)}
      />
    </div>
  );
}