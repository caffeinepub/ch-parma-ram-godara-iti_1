import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";
import Text "mo:core/Text";

actor {
  type Enquiry = {
    name : Text;
    phone : Text;
    course : Text;
    message : Text;
  };

  module Enquiry {
    public func compareByName(a : Enquiry, b : Enquiry) : Order.Order {
      Text.compare(a.name, b.name);
    };
  };

  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, course : Text, message : Text) : async () {
    let enquiry : Enquiry = {
      name;
      phone;
      course;
      message;
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getEnquiries() : async [Enquiry] {
    enquiries.toArray().sort(Enquiry.compareByName);
  };
};
