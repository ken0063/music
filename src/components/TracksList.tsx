import React from 'react'
import { FlatList, FlatListProps } from 'react-native'
import library from '@/assets/data/library.json'
import TracksListItems from './TracksListItems'

export type TracksListProps = Partial<FlatListProps<unknown | any>>
const TracksList = ({ ...flatListProps }: TracksListProps) => {
	return (
		<FlatList
			data={library}
			renderItem={({ item: track }) => (
				<TracksListItems
					track={{
						...track,
						image: track?.artwork,
					}}
				/>
			)}
			{...flatListProps}
		/>
	)
}

export default TracksList
