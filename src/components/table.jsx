import { useState } from "react";
import "./table.css";

export const Table = () => {
  const [numberVisible, setNumberVisible] = useState(null);

  const onClick = (event) => {
    if (event.target.tagName === "TD") {
      const cellNumber = event.target.textContent;
      setNumberVisible(cellNumber);
    }
  };
  return (
    <>
      <table
        border={1}
        style={{
          width: "400px",
        }}
        onClick={onClick}
      >
        <thead>
          <tr style={{ height: "30px" }}>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {numberVisible === "1" ? "1" : ""}
              <span>1</span>
            </td>
            <td>
              {numberVisible === "2" ? "2" : ""}
              <span>2</span>
            </td>
            <td>
              {numberVisible === "3" ? "3" : ""}
              <span>3</span>
            </td>
            <td>
              {numberVisible === "4" ? "4" : ""}
              <span>4</span>
            </td>
          </tr>
          <tr>
            <td>
              {numberVisible === "5" ? "5" : ""}
              <span>5</span>
            </td>
            <td>
              {numberVisible === "6" ? "6" : ""}
              <span>6</span>
            </td>
            <td>
              {numberVisible === "7" ? "7" : ""}
              <span>7</span>
            </td>
            <td>
              {numberVisible === "8" ? "8" : ""}
              <span>8</span>
            </td>
          </tr>
          <tr>
            <td>
              {numberVisible === "9" ? "9" : ""}
              <span>9</span>
            </td>
            <td>
              {numberVisible === "10" ? "10" : ""}
              <span>10</span>
            </td>
            <td>
              {numberVisible === "11" ? "11" : ""}
              <span>11</span>
            </td>
            <td>
              {numberVisible === "12" ? "12" : ""}
              <span>12</span>
            </td>
          </tr>
          <tr>
            <td>
              {numberVisible === "13" ? "13" : ""}
              <span>13</span>
            </td>
            <td>
              {numberVisible === "14" ? "14" : ""}
              <span>14</span>
            </td>
            <td>
              {numberVisible === "15" ? "15" : ""}
              <span>15</span>
            </td>
            <td>
              {numberVisible === "16" ? "16" : ""}
              <span>16</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
