export default function Items({workers, setDays, setPrice}) {
  return workers.map((worker, index) =>
      <tr key={index}>
          <td>{worker.name}</td>
          <td>{worker.lastName}</td>
          <td><input type="number" value={worker.daysWorked}
                     onChange={(e) => setDays({days: e.target.value, worker})}/></td>
          <td><input type="number" value={worker.price} onChange={(e) => setPrice({price: e.target.value, worker})}/>
          </td>
          <td>{worker.daysWorked * worker.price}</td>
      </tr>
  );
}
