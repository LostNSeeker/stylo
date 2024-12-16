import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const initialCartItems = [
  {
    id: '1',
    title: 'Black Strap Crop Rib Top',
    brand: 'Zara',
    price: '$10',
    image: require('../../assets/images/cart.png'),
    arrival: 'Estimated arrival Jan 20 - Jan 30',
    quantity: 1,
    size: 'Size'
  },
  {
    id: '2',
    title: 'Black Strap Crop Rib Top',
    brand: 'Zara',
    price: '$10',
    image: require('../../assets/images/cart.png'),
    arrival: 'Estimated arrival Jan 20 - Jan 30',
    quantity: 1,
    size: 'Size'
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleClear = () => {
    setCartItems([]);
  };

  const incrementQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image 
         source={item.image}  // Remove the require here since image is already required
         style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.productInfo}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <Text style={styles.brand}>{item.brand}</Text>
          
          <TouchableOpacity style={styles.sizeButton}>
            <Text style={styles.sizeText}>{item.size}</Text>
            <Ionicons name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>

          <View style={styles.quantityContainer}>
            <View style={styles.quantityControls}>
              <TouchableOpacity 
                style={styles.quantityButton} 
                onPress={() => decrementQuantity(item.id)}
              >
                <Text style={styles.quantityButtonText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity 
                style={styles.quantityButton} 
                onPress={() => incrementQuantity(item.id)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.deleteButton} 
                onPress={() => removeItem(item.id)}
              >
                <Ionicons name="trash-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.arrival}>{item.arrival}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClear}>
          <Text style={styles.clearButton}>Clear</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <View style={styles.placeholder} />
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  clearButton: {
    fontSize: 16,
    color: '#999999',
  },
  placeholder: {
    width: 40,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    padding: 16,
  },
  cardContent: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  productImage: {
    width: 144,
    height: 216,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  brand: {
    fontSize: 14,
    color: '#999999',
    marginTop: 4,
    marginBottom: 12,
  },
  sizeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  sizeText: {
    fontSize: 14,
    color: '#333',
  },
  quantityContainer: {
    marginBottom: 12,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    fontSize: 20,
    color: '#333',
  },
  quantity: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#FF3B30',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  arrival: {
    fontSize: 12,
    color: '#999999',
  },
  buyButton: {
    backgroundColor: '#000',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999999',
  },
});

export default CartScreen;