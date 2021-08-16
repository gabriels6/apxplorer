import React, { useState, } from 'react';
import { Main,ApiFormControl } from './styles';
import { Button, Input, Table } from '../../components';
import { connect } from 'react-redux';
import ApiUrlDuck from '../../ducks/ApiUrlDuck';
import { useEffect } from 'react';
import axios from 'axios';

const API_Search = ({apiUrl,setApiUrl}) => {

    const [data,setData] = useState([]);
    let response;

    useEffect(() => {
        queryAPI();
    },[]);

    const [Url,setUrl] = useState('');
    // const [apiToken,setApiToken] = useState('');

    function switchAPIUrl(){
        setApiUrl({apiUrl:Url});
        queryAPI();
    }

    function flattenObject(object){
        let result = Object.keys(object).reduce(function (r,k) {
            return r.concat(k, object[k]);
        },[]);
        return result;
    }

    async function queryAPI(){
        response = await axios.get(apiUrl,{
            headers: {
                // 'X-API-Key':apiToken
            }
        });
        setData(response.data != null ? response.data : [{},{}]);
    }

    return(
        <Main>
            <ApiFormControl>
                <Input placeholder={"API url here..."} value={Url} setValue={setUrl}/>
                {/* <Input placeholder={"API token here..."} value={apiToken} setValue={setApiToken}/> */}
                <Button onClick={switchAPIUrl}>
                    Switch API Url
                </Button>
                
            </ApiFormControl>
            <Table>
                <thead>
                    {(data[0] != null && !(data.toString().includes("<!DOCTYPE")) ) ? Object.keys(data[0]).flat(Infinity).map((key) => {
                            return(
                                <th>{key}</th>
                            )
                    }) : (<></>)}
                </thead>
                <tbody>
                    {(data != null && data[0] != null && typeof data == "object") ? data.flat(Infinity).map((item) => {
                        let values = Object.values(item).map((value) => {

                            return (
                                <td>{ value != null ? value : "None"}</td>
                            );
                        });
                        return (
                            <tr>
                                {values}
                            </tr>
                        ) 
                    }):""}
                </tbody>
            </Table>
        </Main>
    );
}

const mapStateToProps = (store) => ({
    apiUrl: store.ApiUrl.apiUrl
});

const mapDisptchtoProps = (dispatch) => ({
    setApiUrl: ({apiUrl}) => dispatch(
        ApiUrlDuck.creators.setApiUrl(apiUrl)
    )
});

export default connect(mapStateToProps,mapDisptchtoProps)(API_Search);