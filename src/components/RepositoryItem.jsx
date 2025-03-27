import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const getLanguageColor = (language) => {
  switch (language) {
    case 'TypeScript': return '#007ACC';
    case 'Ruby': return '#CC342D';
    case 'Python': return '#3776AB';
    default: return '#586069';
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#24292e',
  },
  description: {
    fontSize: 14,
    color: '#586069',
    marginVertical: 5,
  },
  language: {
    fontSize: 12,
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#24292e',
  },
  statLabel: {
    fontSize: 12,
    color: '#586069',
  },
});

const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const RepositoryItem = ({ item }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={[styles.language, { backgroundColor: getLanguageColor(item.language) }]}>
            {item.language}
          </Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{formatCount(item.stargazersCount)}</Text>
              <Text style={styles.statLabel}>Stars</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{formatCount(item.forksCount)}</Text>
              <Text style={styles.statLabel}>Forks</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{formatCount(item.reviewCount)}</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{formatCount(item.ratingAverage)}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RepositoryItem;