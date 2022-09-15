const express = require('express');
const AuthRouter = require('../SubRoutes/AuthRoutes');
const BooksRouter = require('../SubRoutes/BooksRoutes');
const UserRouter = require('../SubRoutes/UserRoutes');
const Router = require('express').Router;
const ReaderController = require('../../controllers/ReaderController');
const MainRoutes = new Router();

MainRoutes.use('/auth',AuthRouter);
MainRoutes.use('/reader/:bookId/:page',ReaderController.reader);
// MainRoutes.use('/:userId/books/favorite',UserActionsController.toggleFavorite);
MainRoutes.use('/books',BooksRouter);
MainRoutes.use('/user',UserRouter);


module.exports = MainRoutes;