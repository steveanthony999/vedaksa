import { AiFillWechat } from 'react-icons/ai';
import { BsFileArrowUp } from 'react-icons/bs';
import { BsFileArrowUpFill } from 'react-icons/bs';
import { BsFileArrowDownFill } from 'react-icons/bs';
import { BsFileArrowDown } from 'react-icons/bs';
import { BiVideo } from 'react-icons/bi';
import { BiDetail } from 'react-icons/bi';
import { BiCodeBlock } from 'react-icons/bi';

import './Request.css';

const Request = () => {
  return (
    <div className='Request'>
      <div className='Request-container'>
        <div className='Request-container-left'>
          <h3>Request Title</h3>
          <p>Request Description</p>
          <p>Requested By: user</p>
        </div>
        <div className='Request-container-right'>
          <div className='Request-container-right-replies'>
            <AiFillWechat size={'2rem'} />
            <p>14</p>
          </div>
          <div className='Request-container-right-votes'>
            <div className='Request-container-right-votes-upvotes'>
              <BsFileArrowUp size={'2rem'} />
              <p>27</p>
            </div>
            <div className='Request-container-right-votes-downvotes'>
              <BsFileArrowDownFill size={'2rem'} />
              <p>12</p>
            </div>
          </div>
          <div className='Request-container-right-media'>
            <BiVideo size={'2rem'} />
            <BiDetail size={'2rem'} />
            <BiCodeBlock size={'2rem'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Request;
