import * as _meshsdk_common from '@meshsdk/common';
import { DeserializedAddress, PubKeyAddress, ScriptAddress, Data, IMeshTxSerializer, Protocol, MeshTxBuilderBody, BuilderData, IDeserializer, IResolver, Certificate, CertificateType, PoolParams, PoolMetadata, Relay, Redeemer, MintItem, Output, ScriptSource, SimpleScriptSourceInfo, TxIn, TxInParameter, ScriptTxInParameter, UTxO, Withdrawal, LanguageVersion, PlutusScript, NativeScript } from '@meshsdk/common';
import * as csl from '@sidan-lab/sidan-csl-rs-nodejs';
export { csl };

declare const serialzeAddress: (deserializedAddress: Partial<DeserializedAddress>, networkId?: number) => string;
declare const addrBech32ToHex: (bech32: string) => string;
declare const addrBech32ToObj: <T>(bech32: string) => T;
declare const serializeAddressObj: (plutusDataAddressObject: PubKeyAddress | ScriptAddress, networkId?: number) => string;
declare const serializePlutusAddressToBech32: (plutusHex: string, networkId?: number) => string;
declare const deserializeBech32Address: (bech32Addr: string) => DeserializedAddress;
declare const scriptHashToBech32: (scriptHash: string, stakeCredentialHash?: string, networkId?: number, isScriptStakeCredentialHash?: boolean) => string;
declare const v2ScriptToBech32: (scriptCbor: string, stakeCredential?: string, networkId?: number, isScriptStakeCredential?: boolean) => string;

declare const parseInlineDatum: <T extends {
    inline_datum?: string;
}, X>(utxo: T) => X;
declare const parseDatumCbor: <T = any>(datumCbor: string) => T;

declare const getV2ScriptHash: (script: string) => string;

declare const skeyToPubKeyHash: (skeyHex: string) => string;

declare const poolIdHexToBech32: (poolIdHash: string) => string;
declare const poolIdBech32ToHex: (poolIdBech32: string) => string;
declare const baseAddressToStakeAddress: (baseAddressBech32: string, network?: number) => string;
declare const rewardAddressToKeyHash: (rewardBech32: string) => string | undefined;
declare const scriptHashToRewardAddress: (scriptHashHex: string, network?: number) => string;
declare const keyHashToRewardAddress: (keyHashHex: string, network?: number) => string;

declare const calculateTxHash: (txHex: string) => string;
declare const signTransaction: (txHex: string, signingKeys: string[]) => string;

/**
 * Apply parameters to a given script blueprint.
 *
 * @param rawScript - The raw script CborHex from blueprint.
 * @param params - The parameters to apply, in an array.
 * @param type - The type of the parameters, default to be Mesh's Data type. It could also be in JSON and raw CBOR.
 * @returns The double-cbor encoded script CborHex with the parameters applied.
 */
declare const applyParamsToScript: (rawScript: string, params: object[] | Data[], type?: "Mesh" | "JSON" | "CBOR") => string;
/**
 * Apply Cbor encoding.
 *
 * @param rawScript - The raw script CborHex from blueprint.
 * @returns The double-cbor encoded script CborHex.
 */
declare const applyCborEncoding: (rawScript: string) => string;

declare class CSLSerializer implements IMeshTxSerializer {
    /**
     * Set to true to enable verbose logging for the txBodyJson prior going into build
     */
    verbose: boolean;
    protocolParams: Protocol;
    meshTxBuilderBody: MeshTxBuilderBody;
    constructor(protocolParams?: Protocol, verbose?: boolean);
    serializeTxBody(txBody: MeshTxBuilderBody, protocolParams?: Protocol): string;
    addSigningKeys(txHex: string, signingKeys: string[]): string;
    serializeData(data: BuilderData): string;
    serializeAddress(address: Partial<DeserializedAddress>, networkId?: number): string;
    serializePoolId(hash: string): string;
    serializeRewardAddress(stakeKeyHash: string, isScriptHash?: boolean, network_id?: 0 | 1): string;
    deserializer: IDeserializer;
    resolver: IResolver;
}

declare const certificateToObj: (certificate: Certificate) => object;
declare const baseCertToObj: (baseCert: CertificateType) => object;
declare const poolParamsToObj: (poolParams: PoolParams) => object;
declare const poolMetadataToObj: (poolMetadata: PoolMetadata) => object;
declare const relayToObj: (relay: Relay) => object;

declare const builderDataToCbor: ({ type, content }: BuilderData) => string;
declare const redeemerToObj: (redeemer: Redeemer) => object;

declare const mintItemToObj: (mintItem: MintItem) => object;
declare const plutusMintItemToObj: (mintItem: Required<MintItem>) => object;
declare const nativeMintItemToObj: (mintItem: Omit<Required<MintItem>, "redeemer">) => object;
declare const mintParametersObj: (mintItem: MintItem) => object;

declare const outputToObj: (output: Output) => object;

declare const scriptSourceToObj: (scriptSource: ScriptSource) => object;
declare const simpleScriptSourceToObj: (scriptSource: SimpleScriptSourceInfo) => object;

declare const txInToObj: (txIn: TxIn) => object;
declare const collateralTxInToObj: (txIn: TxIn) => object;
declare const txInParameterToObj: (txInParameter: TxInParameter) => object;
declare const scriptTxInParameterToObj: (scriptTxInParameter: ScriptTxInParameter) => object;

declare const utxoToObj: ({ input: { outputIndex, txHash }, output: { address, amount, dataHash, plutusData, scriptRef, scriptHash }, }: UTxO) => object;

declare const withdrawalToObj: (withdrawal: Withdrawal) => object;

declare const meshTxBuilderBodyToObj: ({ inputs, outputs, collaterals, requiredSignatures, referenceInputs, mints, changeAddress, metadata, validityRange, certificates, signingKey, withdrawals, network, }: MeshTxBuilderBody) => {
    inputs: object[];
    outputs: object[];
    collaterals: object[];
    requiredSignatures: string[];
    referenceInputs: _meshsdk_common.RefTxIn[];
    mints: object[];
    changeAddress: string;
    metadata: _meshsdk_common.Metadata[];
    validityRange: object;
    certificates: object[];
    signingKey: string[];
    withdrawals: object[];
    network: string;
};

declare const deserializeAddress: (address: string) => csl.Address;
declare const deserializeBip32PrivateKey: (bip32PrivateKey: string) => csl.Bip32PrivateKey;
declare const deserializeDataHash: (dataHash: string) => csl.DataHash;
declare const deserializeEd25519KeyHash: (ed25519KeyHash: string) => csl.Ed25519KeyHash;
declare const deserializeEd25519Signature: (ed25519Signature: string) => csl.Ed25519Signature;
declare const deserializeNativeScript: (nativeScript: string) => csl.NativeScript;
declare const deserializePublicKey: (publicKey: string) => csl.PublicKey;
declare const deserializePlutusData: (plutusData: string) => csl.PlutusData;
declare const deserializePlutusScript: (plutusScript: string, version: LanguageVersion) => csl.PlutusScript;
declare const deserializeScriptRef: (scriptRef: string) => csl.ScriptRef;
declare const deserializeScriptHash: (scriptHash: string) => csl.ScriptHash;
declare const deserializeTx: (tx: string) => csl.Transaction;
declare const deserializeTxBody: (txBody: string) => csl.TransactionBody;
declare const deserializeTxHash: (txHash: string) => csl.TransactionHash;
declare const deserializeTxUnspentOutput: (txUnspentOutput: string) => csl.TransactionUnspentOutput;
declare const deserializeTxWitnessSet: (txWitnessSet: string) => csl.TransactionWitnessSet;
declare const deserializeValue: (value: string) => csl.Value;

declare const toAddress: (bech32: string) => csl.Address;
declare const toBaseAddress: (bech32: string) => csl.BaseAddress | undefined;
declare const toEnterpriseAddress: (bech32: string) => csl.EnterpriseAddress | undefined;
declare const toRewardAddress: (bech32: string) => csl.RewardAddress | undefined;
declare const fromBytes: (bytes: Uint8Array) => string;
declare const toBytes: (hex: string) => Uint8Array;
declare const fromUTF8: (utf8: string) => string;
declare const toUTF8: (hex: string) => string;
declare const fromLovelace: (lovelace: number) => number;
declare const toLovelace: (ada: number) => number;
declare const toScriptRef: (script: PlutusScript | NativeScript) => csl.ScriptRef;
declare const toPlutusData: (data: Data) => csl.PlutusData;
declare const castRawDataToJsonString: (rawData: object | string) => string;
declare const castDataToPlutusData: ({ type, content, }: BuilderData) => csl.PlutusData;
declare const toNativeScript: (script: NativeScript) => csl.NativeScript;

declare const LANGUAGE_VERSIONS: {
    V1: csl.Language;
    V2: csl.Language;
    V3: csl.Language;
};
declare const REDEEMER_TAGS: {
    CERT: csl.RedeemerTag;
    MINT: csl.RedeemerTag;
    REWARD: csl.RedeemerTag;
    SPEND: csl.RedeemerTag;
};
declare const POLICY_ID_LENGTH = 56;

declare const resolveStakeKeyHash: (bech32: string) => string;
declare const resolvePrivateKey: (words: string[]) => string;
declare const resolveNativeScriptAddress: (script: NativeScript, networkId?: number) => string;
declare const resolvePlutusScriptAddress: (script: PlutusScript, networkId?: number) => string;
declare const resolveNativeScriptHash: (script: NativeScript) => string;
declare const resolveRewardAddress: (bech32: string) => string;
declare const resolveDataHash: (data: Data) => string;
declare const resolveNativeScriptHex: (script: NativeScript) => string;
declare const serializePoolId: (hash: string) => string;
declare const resolveScriptRef: (script: PlutusScript | NativeScript) => string;
declare const resolveEd25519KeyHash: (bech32: string) => string;

export { CSLSerializer, LANGUAGE_VERSIONS, POLICY_ID_LENGTH, REDEEMER_TAGS, addrBech32ToHex, addrBech32ToObj, applyCborEncoding, applyParamsToScript, baseAddressToStakeAddress, baseCertToObj, builderDataToCbor, calculateTxHash, castDataToPlutusData, castRawDataToJsonString, certificateToObj, collateralTxInToObj, deserializeAddress, deserializeBech32Address, deserializeBip32PrivateKey, deserializeDataHash, deserializeEd25519KeyHash, deserializeEd25519Signature, deserializeNativeScript, deserializePlutusData, deserializePlutusScript, deserializePublicKey, deserializeScriptHash, deserializeScriptRef, deserializeTx, deserializeTxBody, deserializeTxHash, deserializeTxUnspentOutput, deserializeTxWitnessSet, deserializeValue, fromBytes, fromLovelace, fromUTF8, getV2ScriptHash, keyHashToRewardAddress, meshTxBuilderBodyToObj, mintItemToObj, mintParametersObj, nativeMintItemToObj, outputToObj, parseDatumCbor, parseInlineDatum, plutusMintItemToObj, poolIdBech32ToHex, poolIdHexToBech32, poolMetadataToObj, poolParamsToObj, redeemerToObj, relayToObj, resolveDataHash, resolveEd25519KeyHash, resolveNativeScriptAddress, resolveNativeScriptHash, resolveNativeScriptHex, resolvePlutusScriptAddress, resolvePrivateKey, resolveRewardAddress, resolveScriptRef, resolveStakeKeyHash, rewardAddressToKeyHash, scriptHashToBech32, scriptHashToRewardAddress, scriptSourceToObj, scriptTxInParameterToObj, serializeAddressObj, serializePlutusAddressToBech32, serializePoolId, serialzeAddress, signTransaction, simpleScriptSourceToObj, skeyToPubKeyHash, toAddress, toBaseAddress, toBytes, toEnterpriseAddress, toLovelace, toNativeScript, toPlutusData, toRewardAddress, toScriptRef, toUTF8, txInParameterToObj, txInToObj, utxoToObj, v2ScriptToBech32, withdrawalToObj };
