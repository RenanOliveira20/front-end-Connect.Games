import React, { useEffect, useState } from "react";
import api from "../../api/api";

import NavBar from "../Navbar/Navbar";
import Footer from '../Footer/index'

import UserCard from "./UserCard";

import { ImageLeft, ImageRight, PageComponent, Article, Section } from "../GamesInfo/styles";
import { SectionUser } from "./UserCard/styles";
import SearchBar from "./SearchBar";

const UsersLobby = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState([])

    const userDb = async () => {
        const result = await api.getAllUser()
        setUsers([...result])
    }

    useEffect(()=>{
        userDb()
    },[])

    const userFilter = async (inputSearch) => {
        try {
            
            if(inputSearch === '') {
                userDb();
            } else {
                const filtered = users.filter((user) => {
                    return user.name.toLowerCase().includes(inputSearch.toLowerCase())
                })
                    setUsers([...filtered])
            }
        } catch (error) {
            console.error(error)
        } 
    }

    return(
        <>
            <NavBar/>
            <PageComponent>
                <ImageRight/>

                <Article>
                    <Section>
                        <SearchBar userFilter={userFilter} />                        
                    </Section>
                   
                    <SectionUser>
                        {users.map(user =>
                            <UserCard {...user}/>
                        )}
                    </SectionUser>
                </Article>

                <ImageLeft/>
            </PageComponent>
            <Footer/>
        </>
    )

}

export default UsersLobby;