import React from 'react';
import '../../containers/users/style.css';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from  '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from  '@material-ui/icons/NavigateBefore'
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';


const Footer = (props) => {
  const pages = props.usersListLength > 20 && props.usersListLength / 20;
  const pagesNumbers = Number.isInteger(pages) === false ? pages + 1 : pages;
  const pagesArray = Array(...{ length: pagesNumbers }).map(Number.call, Number);
  const page = Math.trunc(props.page);
  return (
    <div className="pageList">
      <IconButton
        onClick={(e) => {
        props.handleChangePage(0);
        }}
        disabled={props.page === 0}
      > <FirstPageIcon />

      </IconButton>
      <IconButton
        onClick={(e) => {
          props.handleChangePage(props.page - 1);
          }}
        disabled={props.page === 0}
      ><NavigateBeforeIcon />
      </IconButton>
      {
        pagesArray.map(num => (<button
          key={num}
          className="transparentButton"
          onClick={() => {
          props.handleChangePage(num);
          }}
        >{num + 1}
        </button>))
      }
      <IconButton
        onClick={(e) => {
          props.handleChangePage(page + 1);
          }}
        disabled={page === Math.trunc(pagesNumbers) - 1}
      ><NavigateNextIcon />
      </IconButton>
      <IconButton
        onClick={(e) => {
        props.handleChangePage(Math.trunc(pagesNumbers) - 1);
          }}
        disabled={page === Math.trunc(pagesNumbers) - 1}
      ><LastPageIcon />
      </IconButton>
    </div>

  );
};
export default Footer;
