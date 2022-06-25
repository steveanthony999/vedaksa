import { BiChat } from 'react-icons/bi';
import { BsFileArrowUp } from 'react-icons/bs';
import { BsFileArrowUpFill } from 'react-icons/bs';
import { BsFileArrowDownFill } from 'react-icons/bs';
import { BsFileArrowDown } from 'react-icons/bs';
import { BiVideo } from 'react-icons/bi';
import { BiDetail } from 'react-icons/bi';
import { BiCodeBlock } from 'react-icons/bi';
import { FaMoneyBillWave } from 'react-icons/fa';

import './Request.css';

const Request = () => {
  return (
    <div className='Request'>
      <div className='Request-container'>
        <div className='Request-container-left'>
          <div className='Request-votes'>
            <div className='Request-votes-upvotes'>
              <BsFileArrowUp size={'1.5rem'} />
              <p>27</p>
            </div>
            <div className='Request-votes-downvotes'>
              <BsFileArrowDownFill size={'1.5rem'} />
              <p>12</p>
            </div>
          </div>
          <div className='Request-info'>
            <div className='Request-heading'>
              <div className='Request-heading-top'>
                <h3>Integrate PostGresQL with React - </h3>
                <div className='Request-user-info'>
                  <p>Requested By: @zenakelley</p>
                  <FaMoneyBillWave color='green' />
                  <FaMoneyBillWave color='green' />
                  <FaMoneyBillWave color='green' />
                </div>
              </div>
              <p className='Request-description'>
                I'm looking for a tutorial on how to add PostGresQL to a React
                app
              </p>
            </div>

            <div className='Request-tags'>
              <div className='tag'>react</div>
              <div className='tag'>postgres</div>
              <div className='tag'>javascript</div>
            </div>
          </div>
        </div>
        <div className='Request-container-right'>
          <div className='Request-container-right-replies'>
            <BiChat size={'1.5rem'} />
            <p>14</p>
          </div>
          <div className='Request-container-right-media'>
            <BiVideo size={'1.5rem'} color='lightgrey' />
            <BiCodeBlock size={'1.5rem'} />
            <BiDetail size={'1.5rem'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Request;
