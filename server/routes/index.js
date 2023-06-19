var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});



router.get('/api/index_list/2/data/1', function(req, res, next) {
    res.json({
        code: "0",
        data: [{
                type: "bannerList",
                imgUrl: "../../static/img/banner1.jpg"
            },
            {
                type: "iconsList",
                data: [{
                        imgUrl: "../../static/img/icons1.png",
                        name: "运动户外"
                    },
                    {
                        imgUrl: "../../static/img/icons2.png",
                        name: "运动户外"
                    },
                    {
                        imgUrl: "../../static/img/icons3.png",
                        name: "运动户外"
                    },
                    {
                        imgUrl: "../../static/img/icons4.png",
                        name: "运动户外"
                    },
                    {
                        imgUrl: "../../static/img/icons5.png",
                        name: "运动户外"
                    },
                    {
                        imgUrl: "../../static/img/icons6.png",
                        name: "运动户外"
                    },
                    {
                        imgUrl: "../../static/img/icons7.png",
                        name: "运动户外"
                    },
                    {
                        imgUrl: "../../static/img/icons8.png",
                        name: "运动户外"
                    }
                ]
            },
            {
                type: "hotList",
                data: [{
                        id: 1,
                        imgUrl: "../../static/img/hot1.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 2,
                        imgUrl: "../../static/img/hot2.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 3,
                        imgUrl: "../../static/img/hot3.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    }
                ]
            },
            {
                type: "shopList",
                data: [{
                        bigUrl: "../../static/img/shop.jpg",
                        data: [{
                                id: 1,
                                imgUrl: "../../static/img/shop1.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 2,
                                imgUrl: "../../static/img/shop2.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 3,
                                imgUrl: "../../static/img/shop3.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 4,
                                imgUrl: "../../static/img/shop4.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 1,
                                imgUrl: "../../static/img/shop1.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 2,
                                imgUrl: "../../static/img/shop2.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 3,
                                imgUrl: "../../static/img/shop3.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 4,
                                imgUrl: "../../static/img/shop4.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            }
                        ]
                    },
                    {
                        bigUrl: "../../static/img/shop.jpg",
                        data: [{
                                id: 1,
                                imgUrl: "../../static/img/shop1.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 2,
                                imgUrl: "../../static/img/shop2.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 3,
                                imgUrl: "../../static/img/shop3.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 4,
                                imgUrl: "../../static/img/shop4.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 1,
                                imgUrl: "../../static/img/shop1.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 2,
                                imgUrl: "../../static/img/shop2.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 3,
                                imgUrl: "../../static/img/shop3.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 4,
                                imgUrl: "../../static/img/shop4.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            }
                        ]
                    }
                ]
            },
            {
                type: "commodityList",
                data: [{
                        id: 1,
                        imgUrl: "../../static/img/commodity1.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 2,
                        imgUrl: "../../static/img/commodity2.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 3,
                        imgUrl: "../../static/img/commodity3.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 4,
                        imgUrl: "../../static/img/commodity4.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    }
                ]
            }
        ]
    })
});

router.get('/api/index_list/3/data/1', function(req, res, next) {
    res.json({
        code: "0",
        data: [{
                type: "bannerList",
                imgUrl: "../../static/img/banner1.jpg"
            },
            {
                type: "iconsList",
                data: [{
                        imgUrl: "../../static/img/icons1.png",
                        name: "服饰内衣"
                    },
                    {
                        imgUrl: "../../static/img/icons2.png",
                        name: "服饰内衣"
                    },
                    {
                        imgUrl: "../../static/img/icons3.png",
                        name: "服饰内衣"
                    },
                    {
                        imgUrl: "../../static/img/icons4.png",
                        name: "服饰内衣"
                    },
                    {
                        imgUrl: "../../static/img/icons5.png",
                        name: "服饰内衣"
                    },
                    {
                        imgUrl: "../../static/img/icons6.png",
                        name: "服饰内衣"
                    },
                    {
                        imgUrl: "../../static/img/icons7.png",
                        name: "服饰内衣"
                    },
                    {
                        imgUrl: "../../static/img/icons8.png",
                        name: "服饰内衣"
                    }
                ]
            },
            {
                type: "hotList",
                data: [{
                        id: 1,
                        imgUrl: "../../static/img/hot1.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 2,
                        imgUrl: "../../static/img/hot2.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 3,
                        imgUrl: "../../static/img/hot3.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    }
                ]
            },
            {
                type: "shopList",
                data: [{
                        bigUrl: "../../static/img/shop.jpg",
                        data: [{
                                id: 1,
                                imgUrl: "../../static/img/shop1.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 2,
                                imgUrl: "../../static/img/shop2.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 3,
                                imgUrl: "../../static/img/shop3.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 4,
                                imgUrl: "../../static/img/shop4.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 1,
                                imgUrl: "../../static/img/shop1.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 2,
                                imgUrl: "../../static/img/shop2.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 3,
                                imgUrl: "../../static/img/shop3.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 4,
                                imgUrl: "../../static/img/shop4.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            }
                        ]
                    },
                    {
                        bigUrl: "../../static/img/shop.jpg",
                        data: [{
                                id: 1,
                                imgUrl: "../../static/img/shop1.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 2,
                                imgUrl: "../../static/img/shop2.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 3,
                                imgUrl: "../../static/img/shop3.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 4,
                                imgUrl: "../../static/img/shop4.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 1,
                                imgUrl: "../../static/img/shop1.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 2,
                                imgUrl: "../../static/img/shop2.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 3,
                                imgUrl: "../../static/img/shop3.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            },
                            {
                                id: 4,
                                imgUrl: "../../static/img/shop4.jpg",
                                name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                                pprice: "299",
                                oprice: "659",
                                discount: "5.2"
                            }
                        ]
                    }
                ]
            },
            {
                type: "commodityList",
                data: [{
                        id: 1,
                        imgUrl: "../../static/img/commodity1.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 2,
                        imgUrl: "../../static/img/commodity2.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 3,
                        imgUrl: "../../static/img/commodity3.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    },
                    {
                        id: 4,
                        imgUrl: "../../static/img/commodity4.jpg",
                        name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                        pprice: "299",
                        oprice: "659",
                        discount: "5.2"
                    }
                ]
            }
        ]
    })
});


router.get("/api/index_list/data", function(req, res, next) {
    res.send({
        "code": 0,
        "data": {
            topBar: [{
                    id: 1,
                    name: '推荐'
                },
                {
                    id: 2,
                    name: '运动户外'
                },
                {
                    id: 3,
                    name: '服饰内衣'
                },
                {
                    id: 4,
                    name: '鞋靴箱包'
                },
                {
                    id: 5,
                    name: '美妆个护'
                },
                {
                    id: 6,
                    name: '家居数码'
                },
                {
                    id: 7,
                    name: '食品母婴'
                }
            ],
            data: [{
                    type: "swiperList",
                    data: [{
                            imgUrl: '../../static/img/swiper1.jpg'
                        },
                        {
                            imgUrl: '../../static/img/swiper2.jpg'
                        },
                        {
                            imgUrl: '../../static/img/swiper3.jpg'
                        }
                    ]
                },
                {
                    type: "recommendList",
                    data: [{
                            bigUrl: "../../static/img/Children.jpg",
                            data: [{
                                    imgUrl: "../../static/img/Children1.jpg"
                                },
                                {
                                    imgUrl: "../../static/img/Children2.jpg"
                                },
                                {
                                    imgUrl: "../../static/img/Children3.jpg"
                                }
                            ]
                        },
                        {
                            bigUrl: "../../static/img/Furnishing.jpg",
                            data: [{
                                    imgUrl: "../../static/img/Furnishing1.jpg"
                                },
                                {
                                    imgUrl: "../../static/img/Furnishing2.jpg"
                                },
                                {
                                    imgUrl: "../../static/img/Furnishing3.jpg"
                                }
                            ]
                        }
                    ]
                },
                {
                    type: "commodityList",
                    data: [{
                            id: 1,
                            imgUrl: "../../static/img/commodity1.jpg",
                            name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                            pprice: "299",
                            oprice: "659",
                            discount: "5.2"
                        },
                        {
                            id: 2,
                            imgUrl: "../../static/img/commodity2.jpg",
                            name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                            pprice: "299",
                            oprice: "659",
                            discount: "5.2"
                        },
                        {
                            id: 3,
                            imgUrl: "../../static/img/commodity3.jpg",
                            name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                            pprice: "299",
                            oprice: "659",
                            discount: "5.2"
                        },
                        {
                            id: 4,
                            imgUrl: "../../static/img/commodity4.jpg",
                            name: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
                            pprice: "299",
                            oprice: "659",
                            discount: "5.2"
                        }
                    ]
                }
            ]
        }
    })
});


module.exports = router;