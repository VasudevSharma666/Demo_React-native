import React from 'react';
import Skeleton from 'react-native-skeleton-placeholder';
import {View, StyleSheet} from 'react-native';

const skeletonLoader = () => {
  const json = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Skeleton>
      {json.map((items, index) => (
        <View key={index} style={styles.container} />
      ))}
    </Skeleton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 130,
    marginBottom: 5,
    alignSelf: 'center',
    borderRadius: 4,
  },
});
export default skeletonLoader;
