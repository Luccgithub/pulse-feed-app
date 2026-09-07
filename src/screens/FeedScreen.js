import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import FeedHeader from '../components/FeedHeader';
import FeedTabs from '../components/FeedTabs';
import PostCard from '../components/PostCard';
import EmptyFeed from '../components/EmptyFeed';
import LoadingState from '../components/LoadingState';
import BottomNavigation from '../components/BottomNavigation';
import posts from '../data/posts';
import { colors } from '../utils/theme';

export default function FeedScreen() {
  const [selectedFeed, setSelectedFeed] = useState('for-you');
  const [likedIds, setLikedIds] = useState([]);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const visiblePosts = useMemo(() => {
    if (selectedFeed === 'following') {
      return posts.filter((post) => post.following);
    }

    return posts;
  }, [selectedFeed]);

  function handleLike(id) {
    // TODO 6: Add like state from Step 7.
  }

  function handleBookmark(id) {
    // TODO 7: Add bookmark state from Step 8.
  }

  function renderPost({ item }) {
    // TODO 8: Connect PostCard in Step 9.
    return null;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FeedHeader />

      <FeedTabs
        selectedFeed={selectedFeed}
        onSelectFeed={setSelectedFeed}
      />

      {/* TODO 9: Replace this with the loading/FlatList code from Step 10. */}

      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
});