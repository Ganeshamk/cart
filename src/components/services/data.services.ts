const ProductService = {

    currencyFormat: (num: any) => {
        if (num) {
            return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        } else {
            return;
        }
    },

    addToCart: (setProducts: any, products: any, product: any) => {
        setProducts(products.map((item: any) => {
            if (item.productId === product.productId) {
                return { ...item, quantity: 1 };
            }
            return item;
        }));
    },

    removeCart: (setProducts: any, products: any, product: any) => {
        setProducts(products.map((item: any) => {
            if (!product) {
                return { ...item, quantity: 0 };
            } else if (item.productId === product.productId) {
                return { ...item, quantity: 0 };
            }
            return item;
        }));
    },

    quantityChange: (type: any, setProducts: any, products: any, product: any) => {
        setProducts(products.map((item: any) => {
            if (item.productId === product.productId) {
                return { ...item, quantity: type === 'inc' ? item.quantity + 1 : item.quantity - 1 };
            }
            return item;
        }));
    },

    getProducts: () => {
        return [{
            productId: 'INF001',
            imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
            name: "CHECK PRINT SHIRT",
            price: 110,
            category: 'cloths',
            quantity: 1
        },
        {
            productId: 'INF002',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/SWLILSL0275-BLA",
            name: "LILLY LEATHER LUXE MINI WALLET",
            price: 70,
            category: 'wallets',
            quantity: 0
        },
        {
            productId: 'INF003',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/H0YZ02WDXC0-JBLK",
            name: "FACE MASK KIDS",
            price: 10,
            category: 'masks',
            quantity: 0
        },
        {
            productId: 'INF004',
            imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "GLORIA HIGH LOGO SNEAKER",
            price: 91,
            category: 'shoes',
            quantity: 0
        },
        {
            productId: 'INF005',
            imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "CATE RIGID BAG",
            price: 94.5,
            category: 'Bags',
            quantity: 0
        },
        {
            productId: 'INF006',
            imgUrl: "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
            name: "GUESS CONNECT WATCH",
            price: 438.9,
            category: 'watches',
            quantity: 0
        },
        {
            productId: 'INF007',
            imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            name: "RETRO GLAM KEFIAH 70s",
            price: 20,
            category: 'cloths',
            quantity: 0
        },
        {
            productId: 'INF008',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/SWVG7583590-BLA",
            name: "ANNARITA LOGO WALLET",
            price: 55,
            category: 'wallets',
            quantity: 0
        },
        {
            productId: 'INF009',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/FM7GENFAL12-BROCR-ALT1",
            name: "GENOVA 4G LOGO RUNNING SHOE",
            price: 99,
            category: 'shoes',
            quantity: 0
        },
        {
            productId: 'INF010',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/HMDNPUP0324-BLA",
            name: "DAN LA CROSSBODY",
            price: 94.5,
            category: 'Bags',
            quantity: 0
        },
        {
            productId: 'INF011',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/H0YZ02WDXC0-P0TR-ALT1",
            name: "FACE MASK KIDS 12",
            price: 12,
            category: 'masks',
            quantity: 0
        },
        {
            productId: 'INF012',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/GW0051FMSWC-G3",
            name: "MULTIFUNCTION WATCH",
            price: 199,
            category: 'watches',
            quantity: 0
        },
        {
            productId: 'INF013',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/FM6GENLEA12-WHITE-ALT1",
            name: "GENOVA REAL LEATHER RUNNING SHOE",
            price: 94,
            category: 'shoes',
            quantity: 0
        },
        {
            productId: 'INF014',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/SWSM7476460-COA",
            name: "LOGO CITY ALL-OVER PRINT WALLET",
            price: 75,
            category: 'wallets',
            quantity: 0
        },
        {
            productId: 'INF015',
            name: 'DAN 4G LOGO PRINT MINI CROSSBODY',
            imgUrl: "https://img.guess.com/image/upload/w_546,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/HMDNLJP0224-BRO",
            price: 94.5,
            category: 'Bags',
            quantity: 0
        },
        {
            productId: 'INF016',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/WW1256FMSWC-G1",
            name: "MULTI-FUNCTION STITCH DETAIL WATCH",
            price: 159,
            category: 'watches',
            quantity: 0
        },
        {
            productId: 'INF017',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/FM7GENELE12-WHITE",
            name: "GENOVA LOGO SCRIPT RUNNING SHOE",
            price: 69,
            category: 'shoes',
            quantity: 0
        },
        {
            productId: 'INF018',
            imgUrl: "https://img.guess.com/image/upload/w_430,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/HM6837PL201-BLA",
            name: "DAN LOGO PANEL CROSSBODY",
            price: 94.5,
            category: 'Bags',
            quantity: 0
        },
        {
            productId: 'INF019',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/WW0799FMSWC-G4",
            name: "RHINESTONE CASE WATCH",
            price: 439.9,
            category: 'watches',
            quantity: 0
        },
        {
            productId: 'INF020',
            imgUrl: "https://img.guess.com/image/upload/w_938,c_scale/f_auto,q_auto/fl_strip_profile/e_sharpen:50,q_auto:low/v1//EU/Style/ECOMM/FM7SALELE12-BLACK",
            name: "SALERNO STUD SNEAKER",
            price: 119,
            category: 'shoes',
            quantity: 0
        }
        ];
    }
};

export default ProductService;
