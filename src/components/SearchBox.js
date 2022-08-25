import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search, XCircle } from 'react-bootstrap-icons';
import { useState,useEffect } from 'react'
import { FormatColorReset } from '@material-ui/icons';
const SearchBox = ({ marginTop, marginBottom }) => {
    // const[ShowSighn,setShowSighn]=useEffect(falsa);
    const [showSearchIcon, setShowSearchIcon] = useState(true);
    const [showXIcon, setShowXIcon] = useState(false);
    const iconToggle = (show) => {
        if(show){
            setShowSearchIcon(false)
            setShowXIcon(true)
        }else{
            setShowSearchIcon(true)
            setShowXIcon(FormatColorReset)
        }
    }
    return (
        <InputGroup style={{ marginTop: marginTop, marginBottom: marginBottom }}>
            { showSearchIcon &&<InputGroup.Text id="insta-bs-search" className="insta-bs-search">
                <Search />
            </InputGroup.Text>}
            <Form.Control onFocus={iconToggle(true)} onBlur={iconToggle(false)}
                className='insta-bs-search '
                aria-label="Search"
                aria-describedby="insta-bs-search"
            />
            {/* { showXIcon && <InputGroup.Text id="insta-bs-search" className="insta-bs-search">
                <XCircle />
            </InputGroup.Text>} */}
        </InputGroup>
    )
}

export default SearchBox