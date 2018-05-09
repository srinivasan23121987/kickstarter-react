pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;
    function createCampaign(uint minimum) public{
        address newCampaign=new Campaign(minimum,msg.sender);
        deployedCampaigns.push(newCampaign);
        
    }
    function getDeployedCampaigns() public view returns(address[]){
    return deployedCampaigns;    
    }
}
contract Campaign{
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public contributors;
    uint public approversCount;
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalcount;
        mapping(address => bool) approvals;
    }
    Request[] public requests;
    constructor(uint minimum,address creator) public{
        manager=creator;
        minimumContribution=minimum;
    }
    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
    function createRequest(string description, uint value,address recipient) public restricted
    {
        // require(contributors[msg.sender]);
        Request memory req=Request({
        description:description,
        value:value,
        recipient:recipient,
        complete:false,
        approvalcount:0
        });
        requests.push(req);

        
    }
    function contribute() public payable{
        require(msg.value>minimumContribution);
        contributors[msg.sender]=true;
        approversCount++;
   
    }
    
    function approveRequest(uint index) public {
        require(contributors[msg.sender]);
        require(!requests[index].approvals[msg.sender]);
        Request storage requesti=requests[index];
        requesti.approvals[msg.sender]=true;
        requesti.approvalcount++;
    }
    function finalizeRequest(uint index) public restricted{
        Request storage request=requests[index];
        require(request.approvalcount>(approversCount/2));
        require(!request.complete);
        request.recipient.transfer(request.value);
        request.complete=true;
        
        
    } 
 
}