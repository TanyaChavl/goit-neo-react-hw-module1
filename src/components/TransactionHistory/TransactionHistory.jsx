import PropTypes from "prop-types";
import "./TransactionHistory.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className="containerTable">
      <thead className="theadStyle">
        <tr className="theadRowStyle">
          <th className="theadCellStyle">Type</th>
          <th className="theadCellStyle">Amount</th>
          <th className="theadCellStyle">Currency</th>
        </tr>
      </thead>

      <tbody className="tableBodyStyle">
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className="tableRowStyle">
            <td className="tableCellStyle textStyle">{type}</td>
            <td className="tableCellStyle">{amount}</td>
            <td className="tableCellStyle">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;