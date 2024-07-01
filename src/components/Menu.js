import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';

const Menu = ({ role, addToCart }) => {
  const initialMenuItems = [
    {
      id: 1,
      name: 'Puri/Baji Kurma',
      description: 'Deep-fried rounds of flour and a spiced potato dish which may be dry.',
      price: '40',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpritams.co.in%2Findex.php%2Fproduct%2Fpuri-bhaji%2F&psig=AOvVaw35Lt-UI1EknLRUU_RdkNqW&ust=1719676884982000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDZ2fvV_oYDFQAAAAAdAAAAABAE',
      filters: ['breakfast', 'lunch'],
    },
    {
      id: 2,
      name: 'Plain Dosa',
      description: 'A thin, savoury crepe made from a fermented batter of ground white gram and rice.',
      price: '40',
      image: 'https://tastygrill.ca/wp-content/uploads/2024/01/Plain-Dosa-Recipe-1-1280x720-1.jpg',
      filters: ['breakfast'],
    },
    {
      id: 3,
      name: 'Chapati',
      description: 'Round flat unleavened bread that is usually made of whole wheat flour and cooked on a griddle.',
      price: '20',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/chapati-recipe-soft.jpg',
      filters: ['lunch'],
    },
    {
      id: 4,
      name: 'Porota',
      description: 'A layered flatbread, made with ghee or oil and maida.',
      price: '40',
      image: 'https://www.tastycircle.com/wp-content/uploads/2014/06/kerala-parotta-500x375.jpg',
      filters: ['breakfast', 'dinner'],
    },
    {
      id: 5,
      name: 'Veg Fried Rice',
      description: 'Cooked rice that has been stir-fried in a wok or a frying pan and is mixed with other ingredients such as eggs, vegetables.',
      price: '65',
      image: 'https://www.sharmispassions.com/wp-content/uploads/2015/10/chinese-veg-fried-rice-restaurant-style-1.jpg',
      filters: ['lunch', 'dinner'],
    },
    {
      id: 6,
      name: 'Noodles',
      description: 'A cooked egg-and-flour paste prominent in European and Asian cuisine.',
      price: '75',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg',
      filters: ['lunch', 'dinner'],
    },
    {
      id: 7,
      name: 'Biryani',
      description: 'A mixed rice dish.',
      price: '80',
      image: 'https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg',
      filters: ['lunch', 'dinner'],
    },
    {
      id: 8,
      name: 'Lemon Rice',
      description: 'Lemon flavoured cooked rice',
      price: '40',
      image: 'https://www.indianveggiedelight.com/wp-content/uploads/2021/05/instant-pot-lemon-rice-pressure-cooker-recipe-4.jpg',
      filters: ['lunch'],
    },
    {
      id: 9,
      name: 'Mini meals',
      description: 'Sambar, Palya, Pickle',
      price: '45',
      image: 'https://www.chitrasfoodbook.com/wp-content/uploads/2017/01/avarekalu-dantina-soppu-palya-recipe-3.jpg',
      filters: ['lunch'],
    },
    {
      id: 10,
      name: 'Special Meal',
      description: '2 Puri/chapati, Curd, Palya, Gassi',
      price: '60',
      image: 'https://www.watscooking.com/dishes/veg-mini-mealmin-2-orders/6514786',
      filters: ['lunch'],
    },
    {
      id: 11,
      name: 'Masala Dosa',
      description: 'A crepe made using fermented rice and lentil batter.',
      price: '50',
      image: 'https://recipes.net/main-dish/pan-skillet/masala-dosa-recipe/',
      filters: ['breakfast'],
    },
    {
      id: 12,
      name: 'Upma',
      description: 'A dish of thick porridge from coarse rice flour',
      price: '40',
      image: 'https://myfoodstory.com/vegetable-upma/',
      filters: ['breakfast'],
    },
    {
      id: 13,
      name: 'Jeera rice',
      description: 'Rice dish made by cooking basmati rice along with whole spices and then tempering with cumin seeds and green chilies.',
      price: '50',
      image: 'https://www.indianhealthyrecipes.com/jeera-rice-recipe/',
      filters: ['lunch', 'dinner'],
    },
    {
      id: 14,
      name: 'Gobi Manchuri',
      description: 'Battered and deep-fried cauliflower (gobi) tossed in a flavorful sauce made with soy sauce, chili sauce, and a generous amount of aromatics.',
      price: '55',
      image: 'https://www.sharmispassions.com/gobi-manchurian/',
      filters: ['snacks', 'appetizers'],
    },
    {
      id: 15,
      name: 'Veg Sandwich',
      description: 'Vegetarian sandwich consisting of a vegetable filling between bread',
      price: '40',
      image: 'https://www.yumcurry.com/veg-club-sandwich-recipe/',
      filters: ['snacks', 'lunch'],
    },
    {
      id: 16,
      name: 'Burger',
      description: 'Delicious burger with fries',
      price: '10',
      image: 'https://bigbasket.com/media/uploads/flatpages/pd/40025356-02.jpg',
      filters: ['snacks'],
    },
    {
      id: 17,
      name: 'Pizza',
      description: 'Delicious cheese pizza',
      price: '55',
      image: 'https://isorepublic.com/wp-content/uploads/2018/11/isorepublic-pizza-dinner-1-1100x733.jpg',
      filters: ['snacks', 'dinner'],
    },
    {
      id: 18,
      name: 'Massala puri',
      description: 'Delicious burger with fries',
      price: '40',
      image: 'https://i.ytimg.com/vi/xric8J7sm94/maxresdefault.jpg',
      filters: ['snacks'],
    },
    {
      id: 19,
      name: 'Sev puri',
      description: 'Delicious burger with fries',
      price: '40',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3MayfCK25E9_01Pz4UDcdqHtj6c3xfzDkg&s',
      filters: ['snacks'],
    },
    {
      id: 20,
      name: 'Dahi puri',
      description: 'Delicious burger with fries',
      price: '50',
      image: 'https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2021/08/Dahi-Puri-5.jpg?resize=684%2C1024&ssl=1',
      filters: ['snacks'],
    },
    {
      id: 21,
      name: 'Samosa',
      description: 'Fresh evening snacks',
      price: '15',
      image: 'https://content.jdmagicbox.com/comp/hyderabad/u7/040pxx40.xx40.161012105850.a9u7/catalogue/samosa-spot-kondapur-hyderabad-street-food-restaurants-4htbixcnmb.jpg',
      filters: ['snacks'],
    },
    {
      id: 22,
      name: 'Veg roll',
      description: 'Snacks',
      price: '10',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWHQgfSRy8fdVdReD_j6g4Uxr-zSJ43eiB9TKQ-AQKTsMQMR-Qg5umrQ_LQMj6mwfVZ8&usqp=CAU',
      filters: ['snacks'],
    },
    {
      id: 23,
      name: 'Egg puff',
      description: 'Snacks',
      price: '10',
      image: 'https://goldentruffle.com/wp-content/uploads/2022/06/finished-egg-puffs.jpg',
      filters: ['snacks'],
    },
    {
      id: 24,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: '35',
      image: 'https://png.pngtree.com/png-vector/20240229/our',
      filters: ['juices'],
    },
    {
      id: 25,
      name: 'Watermelon Juice',
      description: 'Refreshing watermelon juice',
      price: '40',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpWkxVRR5kSBg2Ee2R-Br0EUIHzPSwLxeBA&usqp=CAU',
      filters: ['juices'],
    },
    {
      id: 26,
      name: 'Mango Juice',
      description: 'Sweet and tangy mango juice',
      price: '45',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJ5HmKs95QXLF-Yrf00E1muPTAKxjBcrAA&usqp=CAU',
      filters: ['juices'],
    }
  ];

  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleAddOrEdit = (item) => {
    if (editItem) {
      setMenuItems(menuItems.map(mi => mi.id === item.id ? item : mi));
    } else {
      setMenuItems([...menuItems, { ...item, id: menuItems.length + 1 }]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Row>
        {menuItems.map(item => (
          <Col key={item.id} md={4}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Price: ₹{item.price}</Card.Text>
                {role === 'admin' && (
                  <>
                    <Button variant="warning" onClick={() => { setEditItem(item); setShowModal(true); }}>Edit</Button>
                    <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                  </>
                )}
                {role !== 'admin' && (
                  <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {role === 'admin' && (
        <Button variant="success" onClick={() => { setEditItem(null); setShowModal(true); }}>Add New Item</Button>
      )}
      <MenuItemModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleAddOrEdit}
        editItem={editItem}
      />
    </Container>
  );
};

const MenuItemModal = ({ show, onHide, onSave, editItem }) => {
  const [item, setItem] = useState(editItem || { name: '', description: '', price: '', image: '', filters: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(item);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{editItem ? 'Edit Item' : 'Add New Item'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={item.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={item.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={item.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={item.image}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Filters (comma separated)</Form.Label>
            <Form.Control
              type="text"
              name="filters"
              value={item.filters.join(', ')}
              onChange={(e) => setItem({ ...item, filters: e.target.value.split(',').map(f => f.trim()) })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Menu;
