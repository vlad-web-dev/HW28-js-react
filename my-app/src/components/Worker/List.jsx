import {useEffect, useState} from "react";
import './css/List.css';
import Loader from "../Loader/Loader";

const resource = 'http://localhost:3004'

export default function WorkerList() {
    let [workers, setWorkers] = useState([])
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        const getWorkers = async () => {
            await fetchWorkers()
                .then(data => {
                    setWorkers(data)
                    setLoading(false)
                })
                .catch(() => setLoading(false))
        }
        getWorkers()
    }, [])
    const fetchWorkers = async () => {
        return await fetch(`${resource}/workers`)
            .then(res => res.json())
    }
    const setDays = async ({days, worker}) => {
        worker.daysWorked = days
        await updateWorker(worker)
            .then(() => setWorkers(workers.map((el => el.id === worker.id ? {...el, daysWorked: days} : el))))
    }

    const setPrice = async ({price, worker}) => {
        worker.price = price
        await updateWorker(worker)
            .then(() => setWorkers(workers.map((el => el.id === worker.id ? {...el, price} : el))))
    }

    const updateWorker = async (data) => {
        return await fetch(`${resource}/workers/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }

    const items = workers.map((worker, index) =>
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
    return loading && <Loader/> || <>
        <div className="header m-b-20">
            <h2>Workers</h2>
        </div>
        <table>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Количество отработанных дней</th>
                <th>Зарплатная ставка за день</th>
                <th>Зарплата</th>
            </tr>
            </thead>
            <tbody>
            {items}
            </tbody>
        </table>
    </>
}