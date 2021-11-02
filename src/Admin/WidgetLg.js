import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/03/18/Incoming/Pictures/1327679_Wallpaper2.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sirisha</span>
          </td>
          <td className="widgetLgDate">21 oct 2021</td>
          <td className="widgetLgAmount">$0</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.WKFvs4hAYEas3NBZT8_42wHaLH&pid=Api&P=0&w=300&h=300"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Teja</span>
          </td>
          <td className="widgetLgDate">20 oct 2021</td>
          <td className="widgetLgAmount">$0</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://thumbs.dreamstime.com/z/happy-indian-student-smiling-books-28690062.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Keerthana</span>
          </td>
          <td className="widgetLgDate">19 oct 2021</td>
          <td className="widgetLgAmount">$0</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.mpL5Il_ESXPk3dhXpPDO3gHaMR&pid=Api&P=0&w=300&h=300" height="100" width="200"              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">lakshmi</span>
          </td>
          <td className="widgetLgDate">16 oct 2021</td>
          <td className="widgetLgAmount">$0</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}