import styles from "./App.module.css"
import { Routes, Route, Link } from 'react-router-dom'
import { MainPage } from "../MainPage/MainPage"
import { Todos } from "../Todos/Todos"
import { Task } from "../Task/Task"
import { Page404 } from "../404/Page404"
import { useEffect, useState } from "react"
import { AppContext } from "../../app-context"

export const App = () => {

	const getTodos = () => {
		return fetch(`http://localhost:3004/mybase`)
	}

    return (
	<div className={styles.app}>
		<div>
			<h1>Меню</h1>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<Link to="/">Главная</Link>
				</li>
				<li className={styles.menuItem}>
					<Link to="/todos">Todos</Link>
				</li>
			</ul>
		</div>
		<AppContext.Provider value={getTodos}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/todos" element={<Todos />} />
				<Route path="/task/:id" element={<Task />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</AppContext.Provider>
	</div>
    )
}
