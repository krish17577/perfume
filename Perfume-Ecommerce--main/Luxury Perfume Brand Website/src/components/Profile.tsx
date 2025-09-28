import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Heart, Package, Settings, Palette, Edit, Save, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme, themes } from './ThemeProvider';
import { Product } from '../App';

interface ProfileProps {
  wishlist: Product[];
  onProductClick: (product: Product) => void;
}

export default function Profile({ wishlist, onProductClick }: ProfileProps) {
  const { currentTheme, setTheme, allThemes } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Alexandra Smith',
    email: 'alexandra@example.com',
    bio: 'Passionate about luxury fragrances and discovering unique scents from around the world.',
    location: 'New York, NY',
    joinDate: 'March 2023'
  });

  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const orderHistory = [
    {
      id: 'ORD-001',
      date: 'March 20, 2024',
      total: 289,
      status: 'Delivered',
      items: ['Chocolate Noir', 'Velvet Rose']
    },
    {
      id: 'ORD-002',
      date: 'February 15, 2024',
      total: 159,
      status: 'Delivered',
      items: ['Golden Essence']
    },
    {
      id: 'ORD-003',
      date: 'January 10, 2024',
      total: 238,
      status: 'Delivered',
      items: ['Ocean Breeze', 'Midnight Storm']
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-8 font-serif text-4xl text-amber-900 text-center">
          My Profile
        </h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User size={16} />
              Profile
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart size={16} />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package size={16} />
              Orders
            </TabsTrigger>
            <TabsTrigger value="themes" className="flex items-center gap-2">
              <Palette size={16} />
              Themes
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl text-amber-900">
                          {profileData.name}
                        </CardTitle>
                        <p className="text-amber-700">Member since {profileData.joinDate}</p>
                      </div>
                    </div>
                    <Button
                      variant={isEditing ? "destructive" : "outline"}
                      onClick={isEditing ? handleCancel : () => setIsEditing(true)}
                    >
                      {isEditing ? <X size={16} /> : <Edit size={16} />}
                      {isEditing ? 'Cancel' : 'Edit'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {isEditing ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm mb-2">Name</label>
                        <Input
                          value={editData.name}
                          onChange={(e) => setEditData({...editData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">Email</label>
                        <Input
                          value={editData.email}
                          onChange={(e) => setEditData({...editData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">Location</label>
                        <Input
                          value={editData.location}
                          onChange={(e) => setEditData({...editData, location: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">Bio</label>
                        <Textarea
                          value={editData.bio}
                          onChange={(e) => setEditData({...editData, bio: e.target.value})}
                          rows={3}
                        />
                      </div>
                      <Button onClick={handleSave} className="w-full">
                        <Save size={16} className="mr-2" />
                        Save Changes
                      </Button>
                    </motion.div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm text-gray-500 mb-1">Email</h3>
                        <p>{profileData.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm text-gray-500 mb-1">Location</h3>
                        <p>{profileData.location}</p>
                      </div>
                      <div>
                        <h3 className="text-sm text-gray-500 mb-1">About</h3>
                        <p>{profileData.bio}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="text-red-500" size={20} />
                    My Wishlist ({wishlist.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {wishlist.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl text-gray-500 mb-2">Your wishlist is empty</h3>
                      <p className="text-gray-400">Start adding fragrances you love!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlist.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => onProductClick(product)}
                          className="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4"
                        >
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <h4 className="text-lg text-gray-900 mb-1">{product.name}</h4>
                          <p className="text-amber-700">${product.price}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="text-amber-600" size={20} />
                    Order History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderHistory.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg text-gray-900">{order.id}</h4>
                          <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{order.date}</span>
                          <span className="text-amber-700">${order.total}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          Items: {order.items.join(', ')}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Themes Tab */}
          <TabsContent value="themes">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="text-purple-600" size={20} />
                    Choose Your Theme
                  </CardTitle>
                  <p className="text-gray-600">
                    Select from our collection of luxury themes to personalize your experience
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allThemes.map((theme, index) => (
                      <motion.div
                        key={theme.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setTheme(theme)}
                        className={`cursor-pointer rounded-xl p-4 border-2 transition-all ${
                          currentTheme.id === theme.id
                            ? 'border-amber-500 shadow-lg'
                            : 'border-gray-200 hover:border-amber-300'
                        }`}
                      >
                        <div 
                          className="w-full h-16 rounded-lg mb-3"
                          style={{ background: theme.background }}
                        />
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: theme.primary }}
                          />
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: theme.secondary }}
                          />
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: theme.accent }}
                          />
                        </div>
                        <h4 className="text-center text-gray-900">{theme.name}</h4>
                        {currentTheme.id === theme.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-center mt-2"
                          >
                            <Badge variant="default">Active</Badge>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}