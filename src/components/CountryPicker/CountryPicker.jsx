import { FormControl, NativeSelect } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { fetchCountries } from '../../Api'
import styles from "./countryPicker.module.css"

const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            return setCountries(await fetchCountries())
        }
        fetchAPI()
    },[setCountries])
    // console.log(countries);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
