import AppPage from "./app.page";

class ProfilePage extends AppPage{
    open() {
        return super.open('/profile/${process.env.USER_ID}')
    }
}

export default new ProfilePage()