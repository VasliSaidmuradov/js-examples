import Model from './model.js';

export default {
    async friendsRoute() {
        const friends = await Model.getFriends({ fields: 'photo_100,bdate' });
        console.log(friends);
    },
    async newsRoute() {
        const news = await Model.getNews({ filters: 'post', count: 20 });
        console.log(news);
    }
};
