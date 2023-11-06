import React, { useState, useEffect } from 'react';
import { getListedNfts } from '../connection/alchemyConnect';
import Nft from './Nft';

export default function NftList({ project }) {
    const [listedNfts, setListedNfts] = useState([]);

    useEffect(() => {
        const fetchListedNfts = async () => {
            try {
                if (project) {
                    const nfts = await getListedNfts(project.projectId);
                    setListedNfts(nfts);
                }
            } catch (error) {
                console.error('Error fetching listed NFTs:', error);
            }
        };

        fetchListedNfts();
    }, [project]);

    if (!project) {
        return null;
    }

    return (
        <div className="flex flex-wrap justify-around m-2">
            {listedNfts.map((nft) => (
                <Nft key={nft.nftId} nft={nft} />
            ))}
        </div>
    );
}
