import { configureStore } from "@reduxjs/toolkit";
import potentialArticlesSlice from "./slices/potentialArticlesSlice";
import displayArticleSlice from "./slices/displayArticleSlice";

export default configureStore({
    reducer: {
        potentialArticles: potentialArticlesSlice,
        displayArticle: displayArticleSlice
    }
})