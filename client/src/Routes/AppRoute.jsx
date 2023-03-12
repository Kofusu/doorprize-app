import { Route, Routes } from "react-router-dom"

import HomePage from "@/pages/HomePage"
import PrizeDetailUserPage from "@/pages/PrizeDetailUserPage"
import LoginPage from "@/pages/auth/LoginPage"
import DashboardPage from "@/pages/admin/DashboardPage"
import UsersPage from "@/pages/admin/UsersPage"
import BlacklistUserPage from "@/pages/admin/BlacklistUserPage"
import SessionPage from "@/pages/admin/SessionPage"
import PrizePage from "@/pages/admin/PrizePage"
import PrizeDetailPage from "@/pages/admin/PrizeDetailPage"
import EditBG from "@/pages/admin/EditBG"

const AppRoute = () => {
  return (
    <Routes>
      {/* User Route */}
      <Route path="/" element={<HomePage />} />
      <Route path="/:prizeID" element={<PrizeDetailUserPage />} />

      {/* Auth Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin Route */}
      <Route path="/admin">
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="blacklist-users" element={<BlacklistUserPage />} />
        <Route path="sessions" element={<SessionPage />} />
        <Route path="sessions/:sessionID" element={<PrizePage />} />
        <Route path="background" element={<EditBG />} />
        <Route
          path="sessions/:sessionID/:prizeID"
          element={<PrizeDetailPage />}
        />
      </Route>
    </Routes>
  )
}

export default AppRoute
