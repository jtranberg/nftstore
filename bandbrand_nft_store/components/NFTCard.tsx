import { MediaRenderer, useActiveClaimCondition, useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { NFT_CONTRACT_ADDRESS } from "../constants/constants";
import styles from '../styles/Home.module.css'

type NFTCardProps = {
    nft: NFT;
}

const NFTCard = ({nft}: NFTCardProps) => {
    const { contract} = useContract(NFT_CONTRACT_ADDRESS);
    const { data: activeClaimCondition, isLoading: isLoadingActiveClaimCondition } = useActiveClaimCondition(
        contract,
        nft.metadata.id
    );

    return (
        <div className={styles.nftCard}>
            <MediaRenderer
            src={nft.metadata.image}
            />
            {isLoadingActiveClaimCondition ? (
                <p>Loading...</p>
            ) : (
                <div style={{padding: "0 1rem"}}>
                    <p style={{fontSize:"1.1rem", fontWeight:"bold"}}>Price:{activeClaimCondition?.currencyMetadata.displayValue} {activeClaimCondition?.currencyMetadata.symbol}</p>
                    <div style={{display: "flex", flexDirection:"row"}}>
                        <p>Max Limit:{activeClaimCondition?.maxClaimablePerWallet}</p>
                        <p>Supply:{activeClaimCondition?.availableSupply}/{activeClaimCondition?.maxClaimableSupply}</p>
                        <p className={styles.nftCardDetail}>Max Limit: {activeClaimCondition?.maxClaimablePerWallet}</p>
                        <p className={styles.nftCardDetail}>Supply: {activeClaimCondition?.availableSupply}/{activeClaimCondition?.maxClaimableSupply}</p>
                    </div>
                </div>
            )}
        </div>
    )
};

export default NFTCard