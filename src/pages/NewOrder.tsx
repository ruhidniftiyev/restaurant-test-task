import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addNewOrderAction } from '../redux/orders/actions';
import arrowLeft from '../assets/grey-arrow-left.svg';

const NewOrder: React.FC = () => {
  const selectTableEl = useRef<HTMLSelectElement>(null);
  const selectWaiterEl = useRef<HTMLSelectElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  type tableItem = {
    id: number;
    title: string;
    value: string;
  };

  const tablesArray: tableItem[] = [
    { id: 0, title: 'Masa 1', value: 'm1' },
    { id: 1, title: 'Masa 2', value: 'm2' },
    { id: 2, title: 'Masa 3', value: 'm3' },
    { id: 3, title: 'Masa 4', value: 'm4' },
    { id: 4, title: 'Masa 5', value: 'm5' },
    { id: 5, title: 'Otaq 1', value: 'o1' },
    { id: 6, title: 'Otaq 2', value: 'o2' },
    { id: 7, title: 'Otaq 3', value: 'o3' },
  ];

  type waiterItem = {
    id: number;
    name: string;
    value: string;
  };

  const waitersArray: waiterItem[] = [
    { id: 0, name: 'Əli', value: 'Əli' },
    { id: 1, name: 'İlham', value: 'İlham' },
    { id: 2, name: 'Fəridə', value: 'Fəridə' },
    { id: 3, name: 'Cəlal', value: 'Cəlal' },
    { id: 4, name: 'Emin', value: 'Emin' },
    { id: 5, name: 'Aysel', value: 'Aysel' },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const table = selectTableEl.current?.value;
    const waiter = selectWaiterEl.current?.value;
    table &&
      waiter &&
      dispatch(
        addNewOrderAction({
          table,
          waiter,
          date: '-',
          foods:[]
        }),
      ) &&
      navigate('/', { replace: true });
  };

  return (
    <div className="new-order">
      <div className="new-order__top">
        <h2 className="new-order__content-title">Yeni sifariş</h2>
      </div>
      <div className="new-order__content">
        <form onSubmit={handleSubmit} className="new-order__form">
          <select defaultValue="" ref={selectTableEl} name="new-order__table" id="">
            <option value="" selected disabled>
              Masanı seçin
            </option>
            {tablesArray.map((table) => (
              <option key={table.id} value={table.value}>
                {table.title}
              </option>
            ))}
          </select>
          <select defaultValue="" ref={selectWaiterEl} name="new-order__waiter" id="">
            <option value="" selected disabled>
              Xidmətçini seçin
            </option>
            {waitersArray.map((waiter) => (
              <option key={waiter.id} value={waiter.value}>
                {waiter.name}
              </option>
            ))}
          </select>
          <button className="new-order__add-btn">Sifariş yarat</button>
        </form>
      </div>
      <div className="new-order__bottom">
        <Link to="/">
          <button className="new-order__go-back-btn">
            <img src={arrowLeft} alt="" />
            <span>Geri qayıt</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewOrder;
